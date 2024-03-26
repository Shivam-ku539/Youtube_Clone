import React from 'react'


const commentsData=[
    {
        name:"Shivam Kumar",
        text:"Lorem Ipsum is simply dummy text . Lorem Ipsum",
        reply:[
            {
                name:"Shivam Kumar",
                text:"Lorem Ipsum is simply dummy text . Lorem Ipsum",
                reply:[
                    {
                        name:"Shivam Kumar",
                        text:"Lorem Ipsum is simply dummy text . Lorem Ipsum",
                        reply:[
                            {
                                name:"Shivam Kumar",
                                text:"Lorem Ipsum is simply dummy text . Lorem Ipsum",
                                reply:[]
                            }
                        ]
                    },
                    {
                        name:"Shivam Kumar",
                        text:"Lorem Ipsum is simply dummy text . Lorem Ipsum",
                        reply:[]
                    }
                ]
            },
            {
                name:"Shivam Kumar",
                text:"Lorem Ipsum is simply dummy text . Lorem Ipsum",
                reply:[]
            },
            {
                name:"Shivam Kumar",
                text:"Lorem Ipsum is simply dummy text . Lorem Ipsum",
                reply:[]
            }
        ]
    },
    {
        name:"Shivam Kumar",
        text:"Lorem Ipsum is simply dummy text . Lorem Ipsum",
        reply:[
            {
                name:"Shivam Kumar",
                text:"Lorem Ipsum is simply dummy text . Lorem Ipsum",
                reply:[]
            }
        ]
    },
    {
        name:"Shivam Kumar",
        text:"Lorem Ipsum is simply dummy text . Lorem Ipsum",
        reply:[]
    }
    
]

const Comment=({data})=>{
    const {name,text,reply}=data;
    return (
        <div className='flex shadow-sm bg-gray-200 p-2 rounded-lg'>
            <img className='h-8' alt='user' src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"/>
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
                <span>👍</span>
                <span>👎</span>
                {/* <p className='font-bold'>{reply}</p> */}
            </div>
        </div>
    )
}

const CommentsList=({comments})=>{
    return comments.map((cmnt,index)=>(
                <div>
                <Comment key={index} data={cmnt}/>
                <div className='pl-5 border border-l-black'>
                <CommentsList key={index} comments={cmnt.reply}/>
                </div>
                </div>
    ))
}

const CommentsContainer = () => {
  return (
    <div className='mt-2 p-2'>
        <h1 className='text-2xl m-2 font-semibold'>{commentsData.length} Comments</h1>
        <hr className=' bg-gray-400 h-[2px] mb-2'></hr>
        {/* <Comment data={commentsData[0]}/>
         */}
         <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer