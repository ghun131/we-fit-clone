import React from 'react';
import { Link } from 'react-router-dom';

const JobPosition = () => (
    <div>
        <div>
            <h3>Bộ phận kinh doanh</h3>
            <div><Link to="/jobs/business-consultant">Chuyên viên tư vấn kinh doanh</Link></div>
            <div><Link to="/jobs/digital-sale">Chuyên viên Digital Sale</Link></div>
            <div><Link to="/jobs/graphic-design-and-video-editor">Graphic design and Video editor </Link></div>
            <div><Link to="/jobs/content-marketing">Chuyên viên Content Marketing</Link></div>
            <div><Link to="/jobs/pr">Chuyên viên quan hệ công chúng - PR</Link></div>
            <div><Link to="/jobs/group-facebook-hn">Chuyên viên xây dựng cộng đồng trực tuyến (Group Facebook HN) </Link></div>
            <div><Link to="/jobs/group-facebook-hcm">Chuyên viên xây dựng cộng đồng trực tuyến (HCM) </Link></div>
        </div>
        
    </div>
);

export default JobPosition;