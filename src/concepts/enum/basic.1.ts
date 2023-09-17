// Enum -it's stands for Enumerations.It allow a developer to define a set of named constants.
// * defaultly It's a numeric enum.but we can change string and both type.

// enum ROLE {
//   SUPER_ADMIN,
//   SUB_ADMIN,
//   CLIENT,
//   PARTICIPATES,
// }

// -------------------------------
// numeric
// automatically It consider next one is 13.

// enum ROLE {
//   SUPER_ADMIN = 12,
//   SUB_ADMIN,
//   CLIENT,
//   PARTICIPATES,
// }

// ---------------------------------------------------------------------------
// sting
// but we nee d to assign the value for all properties

// enum ROLE {
//   SUPER_ADMIN = "superAdmin",
//   SUB_ADMIN = "subAdmin",
//   CLIENT = "client",
//   PARTICIPATES = "participates",
// }

// --------------------------------------------------
// both
enum ROLE {
  SUPER_ADMIN = "superAdmin",
  SUB_ADMIN = "subAdmin",
  CLIENT = "client",
  PARTICIPATES = 12,
}

enum PERMISSIONS {
  CRUD,
  READ_AND_WRITE,
  READ,
}

interface newUser {
  id: number;
  userName: string;
  role: ROLE;
}

function hashPermission(user: newUser, permission: PERMISSIONS) {
  switch (user.role) {
    case ROLE.SUPER_ADMIN:
      return true;

    case ROLE.SUB_ADMIN:
      if (permission == PERMISSIONS.READ_AND_WRITE) {
        return true;
      } else return false;

    case ROLE.CLIENT:
      if (permission == PERMISSIONS.READ_AND_WRITE) {
        return true;
      } else return false;

    case ROLE.PARTICIPATES:
      if (permission == PERMISSIONS.READ) {
        return true;
      } else return false;

    default:
      break;
  }
}

const superAdmin: newUser = {
  id: 1,
  userName: "laluprasath",
  role: ROLE.SUPER_ADMIN,
};

const subAdmin: newUser = {
  id: 2,
  userName: "naveen",
  role: ROLE.SUB_ADMIN,
};

const client: newUser = {
  id: 3,
  userName: "muthu",
  role: ROLE.CLIENT,
};

const participates: newUser = {
  id: 4,
  userName: "mohan",
  role: ROLE.PARTICIPATES,
};

console.log(hashPermission(superAdmin, PERMISSIONS.CRUD));
