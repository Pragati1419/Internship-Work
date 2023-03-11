# PostAPI
Post API 
# PostAPI
Post API

add mongo db url in app.js

Documentation-PostAPI <br/>
Base URL - https://localhost/3000    <br/>
Route:  "/api/posts/create"   (POST) (To upload a new post) <br/>
Req Body : { <br/>
 "userId": "6287998251d8357b8154aece", <br />
"caption": "Test Post 3" <br />

}  <br/>

Response:{  <br/>
 { <br />
    "_id" : Mongoose.ObjectId, <br />
    "userId": "user Id of uploader", <br />
    "caption": "String", <br />
    "image": "default:url in router if not provided by user" <br />
 } <br />
    

}  <br/>

Route: "/api/post/add-comment" (POST) (add comment to post)  <br/>
Req Body : {  <br/>
  "userId": "6287998251d8357b8154aece", <br />
    "postId": "62e78c7872a2feb4b498a07d", <br />
    "comment": "testComment3" <br />
}  <br/>
Resposne: {  <br/>
    {
    "_id": "62e78c7872a2feb4b498a07d", <br/>
    "userId": "6287998251d8357b8154aece", <br/>
    "caption": "Test Post 2", <br/>
    "image": "https://aws.com/9087878", <br/>
    "reactions": [], <br/>
    "comments": [ <br/>
        {
            "userId": "6287998251d8357b8154aece", <br/>
            "postId": "62e78c7872a2feb4b498a07d", <br/>
            "comment": "testComment2", <br/>
            "reactions": [], <br/>
            "_id": "62e817f2c7d9a5b7f55093cc", <br/>
            "createdAt": "2022-08-01T18:14:10.812Z" <br/>
        }, <br/>
        { <br/>
            "userId": "6287998251d8357b8154aece", <br/>
            "postId": "62e78c7872a2feb4b498a07d", <br/>
            "comment": "testComment3", <br/>
            "reactions": [], <br/>
            "_id": "62eca8def0225288af057049", <br/>
            "createdAt": "2022-08-05T05:21:34.505Z" <br/>
        } <br/>
    ], <br/>
    "createdAt": "2022-08-01T08:19:04.250Z", <br/>
}  <br/>



Route: "/api/posts/add-comment-like" (POST) (add like to comment)  <br/>
Req Body : {  <br/>
  "postId" : "62e78c7872a2feb4b498a07d", <br />
    "userId": "6287998251d8357b8154aece", <br />
    "commentId": "62e817f2c7d9a5b7f55093cc", <br />
    "reaction": "like" <br />
}  <br/>
Response: {  <br/>
    "_id": "62e78c7872a2feb4b498a07d", <br />
    "userId": "6287998251d8357b8154aece", <br />
    "caption": "Test Post 2", <br />
    "image": "https://aws.com/9087878", <br />
    "reactions": [], <br />
    "comments": [ <br />
        { <br />
            "userId": "6287998251d8357b8154aece", <br />
            "postId": "62e78c7872a2feb4b498a07d", <br />
            "comment": "testComment2", <br />
            "reactions": [], <br />
            "_id": "62e817f2c7d9a5b7f55093cc", <br />
            "createdAt": "2022-08-01T18:14:10.812Z" <br />
        }, <br />
        { <br />
            "userId": "6287998251d8357b8154aece", <br />
            "postId": "62e78c7872a2feb4b498a07d", <br />
            "comment": "testComment3", <br />
            "reactions": [ <br />
                { <br />
                    "userId": "6287998251d8357b8154aece", <br />
                    "commentId": "62eca8def0225288af057049", <br />
                    "reaction": "like", <br />
                    "_id": "62ecaa22f0225288af057051", <br />
                    "createdAt": "2022-08-05T05:26:58.582Z" <br />
                } <br />
            ], <br />
            "_id": "62eca8def0225288af057049", <br />
            "createdAt": "2022-08-05T05:21:34.505Z" <br />
        } <br />
    ], <br />
    "createdAt": "2022-08-01T08:19:04.250Z", <br />
} <br/>

Route: "/api/posts/add-like" (POST) (add reaction to post)  <br/>
Req Body: { <br/>
  "postId": "62e819f6f267758b440ea732", <br/>
    "userId": "628cbcb5b63b9a8c24fff8bd", <br/>
    "reaction": "like" <br/>
} <br/>
Response :  <br/>
{ <br/>
    "_id": "62e78c7872a2feb4b498a07d", <br/>
    "userId": "6287998251d8357b8154aece", <br/>
    "caption": "Test Post 2", <br/>
    "image": "https://aws.com/9087878", <br/>
    "reactions": [ <br/>
        { <br/>
            "userId": "628cbcb5b63b9a8c24fff8bd", <br/>
            "postId": "62e78c7872a2feb4b498a07d", <br/>
            "reaction": "like", <br/>
            "createdAt": "2022-08-05T05:32:05.916Z", <br/>
            "_id": "62ecab55f0225288af057057" <br/>
        } <br/>
    ], <br/>
    "comments": [ <br/>
        { <br/>
            "userId": "6287998251d8357b8154aece", <br/>
            "postId": "62e78c7872a2feb4b498a07d", <br/>
            "comment": "testComment2", <br/>
            "reactions": [], <br/>
            "_id": "62e817f2c7d9a5b7f55093cc", <br/>
            "createdAt": "2022-08-01T18:14:10.812Z" <br/>
        }, <br/>
        { <br/>
            "userId": "6287998251d8357b8154aece", <br/>
            "postId": "62e78c7872a2feb4b498a07d", <br/>
            "comment": "testComment3", <br/>
            "reactions": [], <br/>
            "_id": "62eca8def0225288af057049", <br/>
            "createdAt": "2022-08-05T05:21:34.505Z" <br/>
        } <br/>
    ], <br/>
    "createdAt": "2022-08-01T08:19:04.250Z", <br/>
} <br/>

Route: "/api/posts/:postId" <br/>
<br/> e.g. "api/posts/62e78c7872a2feb4b498a07d"  (GET) (get details of logged in user) <br/>
Req Body : { <br/>
} <br/>
Response: { <br/>
     "_id": "62e78c7872a2feb4b498a07d", <br/>
    "userId": "6287998251d8357b8154aece", <br/>
    "caption": "Test Post 2", <br/>
    "image": "https://aws.com/9087878", <br/>
    "reactions": [ <br/>
        { <br/>
            "userId": "628cbcb5b63b9a8c24fff8bd", <br/>
            "postId": "62e78c7872a2feb4b498a07d", <br/>
            "reaction": "like", <br/>
            "createdAt": "2022-08-05T05:32:05.916Z", <br/>
            "_id": "62ecab55f0225288af057057" <br/>
        } <br/>
    ], <br/>
    "comments": [ <br/>
        { <br/>
            "userId": "6287998251d8357b8154aece", <br/>
            "postId": "62e78c7872a2feb4b498a07d", <br/>
            "comment": "testComment2", <br/>
            "reactions": [], <br/>
            "_id": "62e817f2c7d9a5b7f55093cc", <br/>
            "createdAt": "2022-08-01T18:14:10.812Z" <br/>
        }, <br/>
        { <br/>
            "userId": "6287998251d8357b8154aece", <br/>
            "postId": "62e78c7872a2feb4b498a07d", <br/>
            "comment": "testComment3", <br/>
            "reactions": [], <br/>
            "_id": "62eca8def0225288af057049", <br/>
            "createdAt": "2022-08-05T05:21:34.505Z" <br/>
        } <br/>
    ], <br/>
    "createdAt": "2022-08-01T08:19:04.250Z", <br/>
} <br/>

Route: "/api/posts/save-post" (POST)  (save post) <br />
Req Body : { <br />
 "username": "user2"
} <br />
Response : { <br />
 
    "userId": "6287998251d8357b8154aece",  <br />
    "postId": "62e78c7872a2feb4b498a07d",  <br />
    "_id": "62ecacf5f0225288af05705c",  <br />
    "createdAt": "2022-08-05T05:39:01.745Z",  <br />

 } <br />

Route: "/api/posts/saved-posts/:userId"  (GET) (get saved post) <br/>
Req Body: { <br/>
} <br/>
Response: Array[{ <br/>

        "_id": "62e78fd16ed16664e5967099", <br/>
        "userId": "6287998251d8357b8154aece", <br/>
        "postId": "62e78c7872a2feb4b498a07d", <br/>
        "createdAt": "2022-08-01T08:33:21.191Z", <br/>
    
 <br/>
}] <br/>
