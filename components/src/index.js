import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>            
                <CommentDetail author = "Sam" timeAgo="Today at 5:50PM" comment="Its awsome" thumbnail={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author = "Raman" timeAgo="Yesterday at 4:15PM" comment="I really like it" thumbnail={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author = "Sameer" timeAgo="today at 12:35PM" comment="You are so cool" thumbnail={faker.image.avatar()}/>      
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />,document.querySelector('#root'));