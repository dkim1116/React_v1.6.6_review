import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Ryan" timeAgo="2 minutes ago" comment="furugi shopping FTW" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Dejon" timeAgo="1 hour ago" comment="I love Elastic" avatar={faker.image.business()}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="Tritia" timeAgo="3 hours ago" comment="I love Chloe and Cindy!" avatar={faker.image.cats()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Raphael" timeAgo="1 day ago" comment="Nodeeee (making fun of Karun)" avatar={faker.image.technics()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Karun" timeAgo="From the TGA days" comment="Walmart gives me life" avatar={faker.image.nature()}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));