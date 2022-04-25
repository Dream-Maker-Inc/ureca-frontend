import {MyPageIconProps} from "@/domains/MyPage/components/MyPageIcon";

export const useEditView = () => {


    const myPageIconData: MyPageIconProps = {
        avatarImage:
            "https://images.unsplash.com/photo-1601158935942-52255782d322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80/",
        brandNameText: "드림메이커",
        brandInfoText: "등록된 한 줄 소개가 없습니다.",
    };
    
    const handleEditClick = () => {
        alert('수정했습니다.');
        }

    return {
        myPageIconData,
      handleEditClick
    };
};
