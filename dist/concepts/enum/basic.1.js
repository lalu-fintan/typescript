"use strict";
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
var ROLE;
(function (ROLE) {
    ROLE["SUPER_ADMIN"] = "superAdmin";
    ROLE["SUB_ADMIN"] = "subAdmin";
    ROLE["CLIENT"] = "client";
    ROLE[ROLE["PARTICIPATES"] = 12] = "PARTICIPATES";
})(ROLE || (ROLE = {}));
var PERMISSIONS;
(function (PERMISSIONS) {
    PERMISSIONS[PERMISSIONS["CRUD"] = 0] = "CRUD";
    PERMISSIONS[PERMISSIONS["READ_AND_WRITE"] = 1] = "READ_AND_WRITE";
    PERMISSIONS[PERMISSIONS["READ"] = 2] = "READ";
})(PERMISSIONS || (PERMISSIONS = {}));
function hashPermission(user, permission) {
    switch (user.role) {
        case ROLE.SUPER_ADMIN:
            return true;
        case ROLE.SUB_ADMIN:
            if (permission == PERMISSIONS.READ_AND_WRITE) {
                return true;
            }
            else
                return false;
        case ROLE.CLIENT:
            if (permission == PERMISSIONS.READ_AND_WRITE) {
                return true;
            }
            else
                return false;
        case ROLE.PARTICIPATES:
            if (permission == PERMISSIONS.READ) {
                return true;
            }
            else
                return false;
        default:
            break;
    }
}
const superAdmin = {
    id: 1,
    userName: "laluprasath",
    role: ROLE.SUPER_ADMIN,
};
const subAdmin = {
    id: 2,
    userName: "naveen",
    role: ROLE.SUB_ADMIN,
};
const client = {
    id: 3,
    userName: "muthu",
    role: ROLE.CLIENT,
};
const participates = {
    id: 4,
    userName: "mohan",
    role: ROLE.PARTICIPATES,
};
console.log(hashPermission(superAdmin, PERMISSIONS.CRUD));
//# sourceMappingURL=basic.1.js.map