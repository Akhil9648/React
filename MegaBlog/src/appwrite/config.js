import conf from "../conf/conf";
import {Client,Account,ID,Databases,Storage,Query} from "appwrite"; 
export class Serivce{
    client=new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwriteurl)
        .setProject(conf.appwriteprojectid);
        this.databases=new Databases(this.client);
        this.bucket=new this.Storage(this.client)
    }
    async createpost({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.databases.createDocument(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        }catch(error){
            throw error;
        }
    }
    async updatepost(slug,{title,content,featuredImage,status}){
        try{
            return await this.databases.updateDocument(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        }catch(error){
            throw error;
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug
            )
            return true;
        } catch (error) {
            return false;
            throw error;
        }
    }
    async getpost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                slug
            )
        } catch (error) {
            return false;
            throw error;
        }
    }
    async getallpost(queries=[Query.equal("status","active")]){ 
        try {
            return await this.databases.listDocuments(
                conf.appwritedatabaseid,
                conf.appwritecollectionid,
                queries
            )
        } catch (error) {
            return false;
            throw error;
        }
    }
    // File Upload methods
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwritebucketid,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error;
        }
    }
    async deletefile(fileID){
        try {
         await this.bucket.deletefile(
            conf.appwritebucketid,
            fileID
         )
        } catch (error) {
            throw error;
        }
    }
    getfilepreview(fileID){
        return this.bucket.getfilepreview(
            conf.appwritebucketid,
            fileID
        )
    } 
}
    const serivce=new Serivce()
    export default serivce