import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useSelector } from 'react-redux';

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
    const mode=useSelector((store)=>store.mode.dark)
    return (
        <div className={`flex shadow-sm p-2 rounded-lg ${mode ? 'bg-gray-600':'bg-gray-300'}`}>
            <AccountCircleIcon/>
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
                <ThumbUpOffAltIcon/>
                <ThumbDownOffAltIcon className='ml-4'/>
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
         <div>
         <CommentsList comments={commentsData}/>
         </div>
    </div>
  )
}

export default CommentsContainer