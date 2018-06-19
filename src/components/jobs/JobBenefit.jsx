import React from 'react';
import Icon1 from '../../images/icon-1.png';
import Icon2 from '../../images/icon-2.png';
import Icon3 from '../../images/icon-3.png';

const JobBenefit = () => (
    <section>
        <div>
            <header><h3>Quyền lợi chung</h3></header>
        </div>
        <div>
            <p>
                <img src={Icon1} alt="Job icon 1"/>
            </p>
            <p>
                Được rèn luyện trong môi trường trẻ cùng các founder 9x, được giao trọng trách và chịu trách nhiệm với các bài toán khó
            </p>
        </div>
        <div>
            <p>
                <img src={Icon2} alt="Job icon 2"/>
            </p>
            <p>
                Cơ chế đánh giá minh bạch, tốc độ tăng thu nhập nhanh (trung bình 15%/năm), không hạn chế phát triển nếu cống hiến tốt
            </p>
        </div>
        <div>
            <p>
                <img src={Icon3} alt="Job icon 3"/>
            </p>
            <p>
                Có cơ hội nhận được phần thưởng cổ phần xứng đáng theo đánh giá hàng kì trong năm
            </p>
        </div>
    </section>
);

export default JobBenefit;