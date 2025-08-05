type Story = {
  id: string;
  title: string;
  status: number;
};

export type Goal = {
  title: string;
  progress: number;
  data: Story[];
};

const rawGoals: Goal[] = [
  {
    title: 'Pay off Credit Card Debt',
    progress: 0.88,
    data: [
      { id: '1', title: 'Pay off $8,500 card', status: 2 },
      { id: '2', title: 'Pay off $9,000 card', status: 1 },
      { id: '3', title: 'Pay off $4,000 card', status: 0 },
    ],
  },
  {
    title: 'Save $20,000',
    progress: 0.25,
    data: [
      { id: '4', title: 'Save $4,000', status: 2 },
      { id: '5', title: 'Save $8,000', status: 1 },
      { id: '6', title: 'Save $15,000', status: 0 },
      { id: '7', title: 'Save $20,000', status: 0 },
    ],
  },
];

export default rawGoals;
