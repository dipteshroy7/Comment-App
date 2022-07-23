export const data = {
  comments: [
    {
      name: "Patricia E. Wiggins",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      votes: 21,
      selfComment: false,
      creationTime: new Date("2022-05-22"),
      comments: [],
    },
    {
      name: "Sandra A. Lamb",
      data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      votes: 21,
      selfComment: false,
      creationTime: new Date("2022-06-22"),
      comments: [
        {
          name: "Brian V. Ober",
          data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
          votes: 21,
          selfComment: false,
          creationTime: new Date("2022-07-6"),
          comments: [],
        },
        {
          name: "Laura W. Bolton",
          data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
          votes: 21,
          selfComment: true,
          creationTime: new Date("2022-07-15"),
          comments: [],
        },
      ],
    },
  ],
};
