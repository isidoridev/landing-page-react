import { ReactNode } from "react";
import isiImage from '../assets/isidori.png'
import { Link } from "react-router-dom";
import styled from "styled-components"

interface UserInfo {
  name: string;
  interests: string[];
  bio: string;
  image: string;
}

export const Background = styled.div`
  background: #191913;
  margin: auto;
`

export const Card = styled.div`
  border: 1px #968b77 solid;
  backgroundColor: rgb(23,23,22);
  color: #fff;
`

const UserImage = styled.img`
  max-width: 200px;
  border-radius: 99%;
  margin-right: 10px;
`

const DetailsTextDiv = styled.div`
  margin: 10px;
`

const UserNameText = ({ username }: any): ReactNode => {
  return <p><strong>{username}</strong></p>;
}


const InterestsDiv = styled.div`
  display: inline;
`

const InterestText = styled.p`
  display: inline;
  margin-right: 40px;
  color: red;
`
const BioText = ({ bio }: any): ReactNode => {
  return <p><i style={{color: "pink"}}>{bio}</i></p>;
}

export function UserCard(): ReactNode {
  const user: UserInfo = {
    name:"Isidori",
    interests:["Programming","Music","Psychology"],
    bio:'"The only thing that matters in business is business"',
    image:isiImage
  }
  
  return (
    <Background className="p-6 mx-auto flex items-center justify-center h-screen space-x-4">
      <Card className="p-6 flex items-center">
        <UserImage src={user.image} />
        <DetailsTextDiv>
          <UserNameText username={user.name}/>
          <InterestsDiv>
            <Link to={'/interests'}>
            {user.interests.map((i: String) => { 
              return (
                <InterestText key={i}>
                  {i}
                </InterestText>
              )})}
            </Link>
          </InterestsDiv>
          <p><i style={{marginTop: "20px"}}>
            {user.bio}</i></p>
        </DetailsTextDiv>
      </Card>  
    </Background>
  )
}
