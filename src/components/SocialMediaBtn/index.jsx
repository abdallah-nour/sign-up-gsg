import './style.css'
export function SocialMediaBtn({ children }) {
    return (
        <a href='#'>
            <div className='media-btn-container'>
                {children}
            </div>
        </a>
    );
}


export function MediaList() {
    return (
        <div className='media-list-container'>
            <SocialMediaBtn>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.649 9.62313H19.895V9.58335H11.47V13.4167H16.7604C15.9886 15.6482 13.9147 17.25 11.47 17.25C8.36819 17.25 5.85333 14.6755 5.85333 11.5C5.85333 8.32458 8.36819 5.75002 11.47 5.75002C12.9018 5.75002 14.2044 6.30298 15.1962 7.20621L17.844 4.49556C16.1721 2.90042 13.9357 1.91669 11.47 1.91669C6.30032 1.91669 2.10889 6.20762 2.10889 11.5C2.10889 16.7924 6.30032 21.0834 11.47 21.0834C16.6397 21.0834 20.8311 16.7924 20.8311 11.5C20.8311 10.8575 20.7665 10.2302 20.649 9.62313Z" fill="#FFC107" />
                    <path d="M3.18848 7.03946L6.26407 9.34856C7.09627 7.23927 9.11172 5.75002 11.4703 5.75002C12.902 5.75002 14.2046 6.30298 15.1964 7.20621L17.8442 4.49556C16.1723 2.90042 13.936 1.91669 11.4703 1.91669C7.87465 1.91669 4.75646 3.99483 3.18848 7.03946Z" fill="#FF3D00" />
                    <path d="M11.47 21.0834C13.8879 21.0834 16.085 20.136 17.7461 18.5955L14.8489 16.0856C13.8774 16.842 12.6904 17.251 11.47 17.25C9.03513 17.25 6.96773 15.6606 6.18889 13.4426L3.13623 15.8504C4.68549 18.9539 7.83176 21.0834 11.47 21.0834Z" fill="#4CAF50" />
                    <path d="M20.6493 9.62308H19.8952V9.58331H11.4702V13.4166H16.7606C16.3914 14.4787 15.7264 15.4067 14.8477 16.0861L14.8491 16.0851L17.7464 18.595C17.5414 18.7857 20.8313 16.2916 20.8313 11.5C20.8313 10.8574 20.7667 10.2302 20.6493 9.62308Z" fill="#1976D2" />
                </svg>
            </SocialMediaBtn>
            <SocialMediaBtn>
                <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                        <path d="M26.3351 2.67897C25.4006 3.11865 24.3964 3.41581 23.3424 3.5495C24.4183 2.86528 25.2444 1.78181 25.6334 0.490864C24.6106 1.13485 23.4916 1.58858 22.3247 1.83244C21.3742 0.758022 20.0201 0.0865479 18.5214 0.0865479C15.6438 0.0865479 13.3107 2.56192 13.3107 5.61497C13.3107 6.04834 13.3569 6.47023 13.4457 6.87497C9.11526 6.64434 5.27593 4.44339 2.70596 1.09855C2.25755 1.91507 2.0006 2.86486 2.0006 3.87792C2.0006 5.79602 2.92055 7.48813 4.31858 8.4796C3.49114 8.4521 2.6819 8.21498 1.95844 7.78802C1.95814 7.81118 1.95814 7.83434 1.95814 7.8576C1.95814 10.5362 3.75419 12.7708 6.13775 13.2787C5.37046 13.5001 4.56564 13.5325 3.78475 13.3734C4.44775 15.5698 6.37208 17.1681 8.65206 17.2129C6.86881 18.6956 4.62206 19.5795 2.18096 19.5795C1.76032 19.5795 1.34563 19.5533 0.937988 19.5022C3.24387 21.0709 5.98269 21.9861 8.92518 21.9861C18.5093 21.9861 23.7501 13.5618 23.7501 6.25613C23.7501 6.01634 23.7452 5.77792 23.7351 5.54086C24.7551 4.75843 25.6356 3.7893 26.3351 2.67897Z" fill="#55ACEE" />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="25.3971" height="22" fill="white" transform="translate(0.937988)" />
                        </clipPath>
                    </defs>
                </svg>
            </SocialMediaBtn>
            <SocialMediaBtn>
                <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                        <path d="M7.3613 22.75H2.57691V7.56112H7.3613V22.75ZM4.96622 5.48925C3.43653 5.48925 2.19531 4.23962 2.19531 2.73163C2.19531 2.00715 2.48725 1.31235 3.00689 0.800074C3.52654 0.287795 4.23133 0 4.96622 0C5.70111 0 6.4059 0.287795 6.92555 0.800074C7.4452 1.31235 7.73713 2.00715 7.73713 2.73163C7.73713 4.23962 6.49591 5.48925 4.96622 5.48925ZM25.2675 22.75H20.4939V15.3562C20.4939 13.5939 20.4576 11.3344 18.0065 11.3344C15.5191 11.3344 15.1375 13.2486 15.1375 15.2295V22.75H10.358V7.56112H14.9463V9.633H15.013C15.6518 8.43944 17.212 7.18006 19.5395 7.18006C24.3815 7.18006 25.2717 10.3236 25.2717 14.4064V22.75H25.2675Z" fill="#0E76A8" />
                    </g>
                    <defs>
                        <clipPath id="clip0">
                            <rect width="26.3739" height="26" fill="white" transform="translate(0.546875)" />
                        </clipPath>
                    </defs>
                </svg>
            </SocialMediaBtn>
            <SocialMediaBtn>
                <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.8898 2.01184C7.28452 2.00921 1.93457 7.28792 1.93457 13.8033C1.93457 18.9554 5.28129 23.335 9.94214 24.9434C10.5698 25.099 10.4737 24.6586 10.4737 24.358V22.3146C6.84915 22.7338 6.70225 20.366 6.45919 19.9705C5.96773 19.1426 4.80586 18.9317 5.15309 18.5362C5.97842 18.1169 6.81977 18.6416 7.79468 20.0628C8.49981 21.0938 9.87536 20.9198 10.5725 20.7484C10.7247 20.1287 11.0506 19.575 11.4993 19.1452C7.74393 18.4808 6.17874 16.2185 6.17874 13.529C6.17874 12.2239 6.61411 11.0241 7.46882 10.0565C6.92394 8.46126 7.51957 7.09544 7.5997 6.89241C9.15153 6.7553 10.7648 7.98928 10.8903 8.08684C11.7717 7.85217 12.7787 7.72825 13.9059 7.72825C15.0383 7.72825 16.048 7.85745 16.9374 8.09475C17.2392 7.86799 18.735 6.80803 20.1773 6.93723C20.2547 7.14026 20.837 8.47444 20.3242 10.0486C21.1896 11.0189 21.6303 12.2291 21.6303 13.5369C21.6303 16.2317 20.0544 18.4966 16.2884 19.1505C16.6109 19.4637 16.8671 19.8372 17.0418 20.2491C17.2165 20.6611 17.3063 21.1033 17.306 21.5499V24.5162C17.3274 24.7535 17.306 24.9882 17.7066 24.9882C22.4369 23.4141 25.8424 19.0029 25.8424 13.8059C25.8424 7.28792 20.4898 2.01184 13.8898 2.01184Z" fill="black" />
                </svg>
            </SocialMediaBtn>
        </div>

    );
}
