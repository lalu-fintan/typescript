"use strict";
// interface Participates extends newUser {
//   role: ROLE.PARTICIPATES;
// }
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
console.log(subAdmin);
console.log(hashPermission(participates, PERMISSIONS.READ));
//# sourceMappingURL=basic.2.js.map