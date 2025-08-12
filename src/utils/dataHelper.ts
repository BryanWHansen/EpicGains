import { Goal } from "../utils/dataLayer";

export const withCalculatedProgress = (goals: Goal[]): Goal[] => {
  return goals.map((goal) => {
    const total = goal.stories.length;
    const completed = goal.stories.filter(
      (story: any) => story.status === 2
    ).length;
    const progress = total > 0 ? completed / total : 0;
    return { ...goal, progress };
  });
};
