export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

const userMock: User = {
  id: 1,
  email: "george.bluth@reqres.in",
  first_name: "George",
  last_name: "Bluth",
  avatar: "https://reqres.in/img/faces/1-image.jpg"
};

export { userMock };
