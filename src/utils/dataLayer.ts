import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase/auth";

export type Story = {
  id: string;
  title: string;
  status: number;
  description: string;
  targetDate: string; // convert Firestore Timestamp -> ISO/string if needed
  details: string;
};

export type Goal = {
  id: string;
  title: string;
  progress: number; // computed later
  stories: Story[];
};

export function subscribeGoals(
  uid: string,
  onChange: (goals: Goal[]) => void,
  onError?: (e: unknown) => void
) {
  const goalsCol = collection(db, "users", uid, "goals");
  return onSnapshot(
    goalsCol,
    async (goalsSnap) => {
      // fetch each goal's stories in parallel for speed
      const goals = await Promise.all(
        goalsSnap.docs.map(async (g) => {
          const storiesCol = collection(
            db,
            "users",
            uid,
            "goals",
            g.id,
            "stories"
          );
          const storiesSnap = await getDocs(
            query(storiesCol, orderBy("targetDate", "asc"))
          );

          const stories: Story[] = storiesSnap.docs.map((d) => {
            const data = d.data() as any;
            return {
              id: d.id,
              title: data.title,
              status: data.status,
              description: data.description,
              targetDate:
                typeof data.targetDate?.toDate === "function"
                  ? data.targetDate.toDate().toISOString().slice(0, 10)
                  : data.targetDate,
              details: data.details,
            };
          });

          const gData = g.data() as any;
          return {
            id: g.id, // << use Firestore doc id
            title: gData.title,
            progress: 0,
            stories: stories,
          } as Goal;
        })
      );

      onChange(goals);
    },
    onError
  );
}
