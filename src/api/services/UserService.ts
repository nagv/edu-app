interface IUserData {
    name: string,
    id: number
}

interface IUserService {
    userProfileData(): IUserData
}

class UserService implements IUserService {
    public userProfileData(): IUserData {
        try {
            return {
                name: 'Raju',
                id: 1820
            }
        } catch (e) {
            throw e;
        }
    }
}

export default new UserService(); 