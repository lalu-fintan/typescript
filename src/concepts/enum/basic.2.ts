// interface Participates extends newUser {
//   role: ROLE.PARTICIPATES;
// }

// // if you are not declare the role participates It eill throw error
// const user: Participates = {
//   id: 1,
//   userName: "laluprasath",
//   role: ROLE.PARTICIPATES,
// };

// enum ROLE {
//     SUPER_ADMIN,
//     SUB_ADMIN,
//     CLIENT,
//     PARTICIPATES,
//   }

//   enum PERMISSIONS {
//     CRUD,
//     READ_AND_WRITE,
//     READ,
//   }

interface newUser {
  id: number;
  userName: string;
  role: ROLE;
}

// function hashPermission(user: newUser, permission: PERMISSIONS) {
//   switch (user.role) {
//     case ROLE.SUPER_ADMIN:
//       return true;

//     case ROLE.SUB_ADMIN:
//       if (permission == PERMISSIONS.READ_AND_WRITE) {
//         return true;
//       } else return false;

//     case ROLE.CLIENT:
//       if (permission == PERMISSIONS.READ_AND_WRITE) {
//         return true;
//       } else return false;

//     case ROLE.PARTICIPATES:
//       if (permission == PERMISSIONS.READ) {
//         return true;
//       } else return false;

//     default:
//       break;
//   }
// }

// const superAdmin: newUser = {
//   id: 1,
//   userName: "laluprasath",
//   role: ROLE.SUPER_ADMIN,
// };

// const subAdmin: newUser = {
//   id: 2,
//   userName: "naveen",
//   role: ROLE.SUB_ADMIN,
// };

// const client: newUser = {
//   id: 3,
//   userName: "muthu",
//   role: ROLE.CLIENT,
// };

// const participates: newUser = {
//   id: 4,
//   userName: "mohan",
//   role: ROLE.PARTICIPATES,
// };
// console.log(subAdmin);
// console.log(hashPermission(participates, PERMISSIONS.READ));
