import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'
import PdfSegment from './PdfSegment'

const App =()=>{ 
  return(
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Raton" timeAgo = "Today 4:45 PM" comment="Hello! Are you there?"/>
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail author="Nana" timeAgo = "Today 4:45 PM" comment="Sorry,Today virat get hundreds" />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail author="Mithila" timeAgo = "Today 4:45 PM" comment="What the abouts message for me?"/>
      </ApprovalCard>
      
      <PdfSegment/>

    </div>
  )
}

ReactDOM.render(
    <App />,
  document.querySelector('#root')
)
