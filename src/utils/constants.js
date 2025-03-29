export const UserRoleEnum ={
    ADMIN:"admin",
    PROJECT_ADMIN:"project_admin",
    MEMBER:"member"
}
Object.freeze(UserRoleEnum)

export const AvailableUserRole = Object.values(UserRoleEnum)//array

export const TaskStatusEnum = {
    TODO : "todo",
    IN_PROGRESS : "in_progress",
    DONE : "done"
}
Object.freeze(TaskStatusEnum)

export const TaskStatus = Object.values(TaskStatusEnum)//array