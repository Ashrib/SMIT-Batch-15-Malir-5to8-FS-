import { redis } from "@/lib/redis";
import { NextResponse } from "next/server";

export async function GET() {
    
    const postCacheKey = 'cachePosts';
    // redis.del(postCacheKey)

    let cachePosts = await redis.get(postCacheKey);

    if(cachePosts){
        return NextResponse.json({
            message: 'posts from redis',
            posts: cachePosts,
        })
    }

    ///request mongodb for posts data
    let dbPosts = [{name: 'post1'}]

    // cache store in redis
    redis.set(postCacheKey, JSON.stringify(dbPosts) ,'EX', 60);

    return NextResponse.json({
        message: 'posts from db',
        posts: dbPosts,
    })
}