import { Goal } from "../data/goals";

export const withCalculatedProgress = (goals: Goal[]): Goal[] => {
    return goals.map((goal) =>{
        const total = goal.data.length;
        const completed = goal.data.filter((story: any) => story.status === 2).length;
        const progress = total > 0 ? completed / total : 0
        return {...goal, progress}
    });
};