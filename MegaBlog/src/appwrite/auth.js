import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

class AuthService {
    client = new Client();
    account;

    constructor() {
        if (!conf.appwriteUrl || !conf.appwriteProjectId) {
            throw new Error("Missing Appwrite configuration");
        }
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return await this.login({ email, password });
            }
            return null;
        } catch (error) {
            console.error("AuthService :: createAccount ::", error.message);
            return { success: false, message: error.message };
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.error("AuthService :: login ::", error.message);
            return { success: false, message: error.message };
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("AuthService :: getCurrentUser ::", error.message);
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
            return { success: true };
        } catch (error) {
            console.error("AuthService :: logout ::", error.message);
            return { success: false, message: error.message };
        }
    }

    async resetPassword(email, redirectUrl) {
        try {
            return await this.account.createRecovery(email, redirectUrl);
        } catch (error) {
            console.error("AuthService :: resetPassword ::", error.message);
            return { success: false, message: error.message };
        }
    }
}

const authService = new AuthService();
export default authService;
