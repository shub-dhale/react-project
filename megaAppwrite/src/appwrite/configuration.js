import config from "../config/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    Databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId)
        this.Databases = new Databases(this.client);
        this.bucket = new Storage(this.client);     
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try{
            return await this.Databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }

            )
        }catch(error){
            console.log(error);
        }
    }

    async updatePost(slug,{title, content, featuredImage, status, userId}){
        try{
            return await this.Databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch(error){
            console.log(error);
        }

    }

    async deletePost(slug){
        try{
            await this.Databases.deleteDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
            return true
        } catch(error){
            console.log(error);
            return false
        }
        
    }

    async getPost(slug){
        try{
            return await this.Databases.getDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug
            )
        } catch(error){
            console.log(error)
            return false
        }
    }

    async getPosts(queries = [Query.equal("status","active")]){
        try{
            return await this.Databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries,
            )
        } catch(error){
            console.log(error);
            return false
        }
    }

    /////File Services/////
    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch(error){
            console.log(error)
            return false
        }
    }

    async deleteFile(){
        try{
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true
        } catch(error){
            console.log(error);
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service();

export default service;