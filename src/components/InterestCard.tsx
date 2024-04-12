import styled from "styled-components"

const Background = styled.div`
  background: #111012;
  margin: auto;
`

const ContentCard = styled.div`
  margin: auto;
  color: white;
  border: 1px #968b77 solid;
`

export default function InterestCard() {
  return (
  <Background className="p-6 mx-auto flex h-screen space-x-4">
    <ContentCard className="p-6 space-x4">
      <div className="p-6 display">
        <h3>Musician</h3>
        <h3>Programmer</h3>
        <h3>Writer</h3>
        <div style={{marginBottom: "5px"}}></div>
        <p>I write songs, code, and other stuff</p>
        <p>Not all writing is worth sharing, but I hope you can appreciate the ones that I decide to show you.</p>

      </div>
    </ContentCard>
  </Background>
  )
};
