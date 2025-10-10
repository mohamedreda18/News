
import { useLocation } from 'react-router'
import { useContext } from 'react'
import { likeContext } from '../hooks/context'


const ArticlesPage = () => {


    const { toggleLike } = useContext(likeContext)




    const location = useLocation()

    const { article } = location.state
    console.log(article.title);

    const formatDate = new Date(article.publishedAt).toLocaleDateString()


    return (

        <div className=' min-h-screen'>
            <header className='bg-[#0E1E32] h-48'>
            </header>
            <div className='container  max-w-3/4 mx-auto px-4  mt-[-120px]'>
                <div className='flex justify-center mb-5'>
                    <h1 className=' font-bold text-white text-2xl text-center w-2/3'>{article.title}</h1>
                </div>
                <div>
                    <img className='w-full h-84 object-cover' src={article.image} alt="" />
                </div>
                <div className='flex flex-col  mt-5 gap-9'>

                    <div className='flex space-x-5 '>
                        <span>{formatDate}</span>
                        <span className='font-light'>{article.author}</span>

                    </div>

                    <div className=' my-6'>
                        <p className=' text-2xl  font-bold'>  {article.description}</p>
                    </div>


                </div>
            </div>
            <div className='icons  absolute left-6 top-[60%] tracking-wide w-18 flex flex-col items-center'>
                <div >
                    <span>See more like this?</span>
                    <div>
                        <span>
                            <svg width="40" height="14" viewBox="0 0 40 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="12" width="10" height="10" rx="5" transform="rotate(-90 0 12)" fill="#15C36F" />
                                <rect x="30" y="12" width="10" height="10" rx="5" transform="rotate(-90 30 12)" fill="#EB681E" />
                                <path d="M20 14L20 -4.17233e-07" stroke="black" />
                            </svg>
                        </span>

                    </div>
                </div>
                <div className='flex flex-col space-y-6 mt-7'>
                    <div className='flex justify-center items-center '>
                        <button onClick={toggleLike}
                            className={` cursor-pointer hover:bg-red-300  rounded `}
                        >
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 16C9 16 0 7.64952 0 4.68445C0 1.52744 1.64588 0 5.0625 0C6.75 0 9 2.5811 9 2.5811C9 2.5811 11.25 0 12.9375 0C16.3541 0 18 1.52644 18 4.68445C18 7.64952 9 16 9 16ZM12.9375 1.03264C12.0499 1.03264 9 3.61179 9 3.61179C9 3.61179 5.949 1.03264 5.0625 1.03264C2.07225 1.03264 1.125 2.15932 1.125 4.82149C1.125 7.32371 9 14.4504 9 14.4504C9 14.4504 16.875 7.32371 16.875 4.82149C16.875 2.15932 15.9277 1.03264 12.9375 1.03264Z" fill="#2A2A2A" />
                            </svg>

                        </button>
                    </div>
                    <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 17.5C10.3837 17.5 10.7587 17.4763 11.13 17.44L16.25 20V15.5737C18.535 13.97 20 11.5113 20 8.75C20 3.9175 15.5238 0 10 0C4.4775 0 0 3.9175 0 8.75C0 13.5825 4.4775 17.5 10 17.5ZM10 1.24878C14.8325 1.24878 18.75 4.60753 18.75 8.74878C18.75 11.2888 17.2587 13.51 15 14.8625V14.9974V18.1224L11.25 16.2488C11.25 16.2488 11.4338 16.2488 10 16.2488C5.16875 16.2488 1.25 12.89 1.25 8.74878C1.25 4.60753 5.16875 1.24878 10 1.24878Z" fill="#2A2A2A" />
                    </svg>
                    </span>
                    <span><svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 20H1.25C0.55875 20 0 19.4412 0 18.7512V6.25C0 5.56 0.55875 5 1.25 5H3.125V6.25H1.875C1.53 6.25 1.25 6.53125 1.25 6.875V18.125C1.25 18.4713 1.53 18.7512 1.875 18.7512H14.375C14.7188 18.7512 15 18.4713 15 18.125V6.875C15 6.53125 14.7188 6.25 14.375 6.25H13.125V5H15C15.69 5 16.25 5.56 16.25 6.25V18.7512C16.25 19.4412 15.69 20 15 20ZM10.8325 4.19617L8.75 2.11365V14.375C8.75 14.72 8.46875 15 8.125 15C7.78 15 7.5 14.72 7.5 14.375V2.11365L5.41626 4.19617C5.17876 4.43492 4.79118 4.43492 4.55368 4.19617C4.31618 3.95992 4.31618 3.57121 4.55368 3.33496L7.6413 0.246124C7.64505 0.241124 7.6525 0.238765 7.65625 0.233765C7.67 0.217515 7.66505 0.19371 7.68005 0.17746C7.7038 0.15496 7.73745 0.162458 7.76245 0.144958C7.85495 0.0699585 7.96243 0.0186682 8.08868 0.00991821C8.09868 0.00991821 8.10755 0.00366211 8.1163 0.00366211C8.12005 0.00366211 8.12247 0 8.12622 0C8.12997 0 8.13254 0.00241211 8.13629 0.00366211C8.14379 0.00241211 8.14878 0.00747681 8.15628 0.00747681C8.30503 0.0149768 8.43995 0.0736682 8.5437 0.166168C8.55245 0.174918 8.56626 0.17118 8.57376 0.17868C8.58126 0.18868 8.57752 0.202461 8.58627 0.209961C8.59127 0.214961 8.58997 0.224921 8.59497 0.231171L11.6975 3.33496C11.9363 3.57121 11.9363 3.95992 11.6975 4.19617C11.4575 4.43617 11.0713 4.43617 10.8325 4.19617Z" fill="#2A2A2A" />
                    </svg>
                    </span>
                    <span><svg width="13" height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 15L0 20V1C0 0.447715 0.447715 0 1 0H11.5C12.0523 0 12.5 0.447715 12.5 1V20L6.25 15ZM11.25 2.25C11.25 1.69772 10.8023 1.25 10.25 1.25H2.25C1.69772 1.25 1.25 1.69772 1.25 2.25V17.5L6.25 13.125L11.25 17.5V2.25Z" fill="#2A2A2A" />
                    </svg>
                    </span>
                </div>
            </div>



        </div>

    )
}

export default ArticlesPage
