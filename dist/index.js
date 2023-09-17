"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { Employee } from "./reuseable_data/employee.type";
// interface User {
//   readonly name: string;
//   employeeID: number;
//   getName(): string;
// }
// class Fresher implements User {
//   name = "laluprasath";
//   employeeID = 2;
//   getName(): string {
//     return this.name;
//   }
// }
// const employee1: User = new Fresher();
// console.log(employee1.getName());
var ROLE;
(function (ROLE) {
    ROLE[ROLE["SUPER_ADMIN"] = 0] = "SUPER_ADMIN";
    ROLE[ROLE["SUB_ADMIN"] = 1] = "SUB_ADMIN";
    ROLE[ROLE["CLIENT"] = 2] = "CLIENT";
    ROLE[ROLE["PARTICIPATES"] = 3] = "PARTICIPATES";
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
console.log(subAdmin);
console.log(hashPermission(participates, PERMISSIONS.READ));
//# sourceMappingURL=index.js.map