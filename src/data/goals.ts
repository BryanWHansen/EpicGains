export type Story = {
  id: string;
  title: string;
  status: number;
  description: string;
  targetDate: string;
  details: string;
};

export type Goal = {
  title: string;
  progress: number;
  data: Story[];
};

const rawGoals: Goal[] = [
  {
    title: "Pay off Credit Card Debt",
    progress: 0.88,
    data: [
      {
        id: "1",
        title: "Pay off $8,500 card",
        status: 2,
        description: "Pay off the highest balance credit card first.",
        targetDate: "2025-09-01",
        details:
          "This card has the highest interest rate, so paying it off first will save the most money.",
      },
      {
        id: "2",
        title: "Pay off $9,000 card",
        status: 1,
        description: "Next priority card to tackle.",
        targetDate: "2025-10-01",
        details:
          "After the $8,500 card, focus on this one to reduce overall debt burden.",
      },
      {
        id: "3",
        title: "Pay off $4,000 card",
        status: 0,
        description: "Smallest card, pay off last or snowball.",
        targetDate: "2025-11-15",
        details:
          "This has the smallest balance but could be tackled early if using snowball method.",
      },
    ],
  },
  {
    title: "Save $20,000",
    progress: 0.25,
    data: [
      {
        id: "4",
        title: "Save $4,000",
        status: 2,
        description: "Initial emergency fund milestone.",
        targetDate: "2025-06-01",
        details:
          "Build quick-access emergency funds to cover 1-2 months of expenses.",
      },
      {
        id: "5",
        title: "Save $8,000",
        status: 1,
        description: "Progressing toward full 3-month safety net.",
        targetDate: "2025-09-01",
        details:
          "Should represent about 2–3 months of expenses for greater security.",
      },
      {
        id: "6",
        title: "Save $15,000",
        status: 0,
        description: "Bulk savings goal for 4–6 months expenses.",
        targetDate: "2025-12-01",
        details:
          "Get close to 6 months runway in case of job loss or emergencies.",
      },
      {
        id: "7",
        title: "Save $20,000",
        status: 0,
        description: "Final savings goal",
        targetDate: "2026-03-01",
        details: "Allows flexibility for long-term planning or investing.",
      },
    ],
  },
];

export default rawGoals;
