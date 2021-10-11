import React from 'react';
import {
    UserInformationContainer,
    UserName,
    UserDescription,
    AvatarStyled,
    RatingStyled,
} from './userinformation.style';

interface UserInformationProps{
    picture: string;
    name: string;
    rating: number;
    description?: string;
}

const UserInformation: React.FC<UserInformationProps> = (props) => {
    return <UserInformationContainer>
        <AvatarStyled src={'http://github.com/joziborges.png'}/>
        <UserName>Jozi</UserName>
        <RatingStyled readOnly value={3} />
        <UserDescription>Porto Alegre</UserDescription>
    </UserInformationContainer>;
};

export default UserInformation;