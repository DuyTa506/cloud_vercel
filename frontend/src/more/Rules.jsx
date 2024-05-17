import React from 'react';
import './Rules.css';
import Header from '../component/Home/Header';
import BottomTab from './BottomTab';
import MetaData from './Metadata';
import Footer from '../Footer';

const Rules = () => {
    return (
        <>
            <MetaData title="Điều khoản" />
            <Header />
            <div className='rules-container'>
                <h1 className='rules-title'>Quy trình nhận hàng và kiểm hàng</h1>
                <ul className='rules-list'>
                    <li>Kiểm tra kỹ thông tin nhận hàng trên đơn hàng, bao gồm: số lượng, chủng loại, giá sản phẩm.</li>
                    <li>Sau khi kiểm hàng trên phương tiện vận chuyển, thanh toán cho bên giao hàng.</li>
                    <li>Bên giao hàng giao hàng cho quý khách.</li>
                </ul>
                <h1 className='rules-title'>Trường hợp đơn hàng gặp vấn đề</h1>
                <ul className='rules-list'>
                    <li>Thừa/thiếu sản phẩm.</li>
                    <li>Sản phẩm không đúng với đơn hàng đã đặt.</li>
                    <li>Sản phẩm bị rách bao bì khi nhìn bằng mắt thường.</li>
                </ul>
                <p className='contact-info'>Quý khách hàng có quyền từ chối nhận hàng và liên hệ ngay với hotline: <span className='hotline'>0979 807 308</span> để được hỗ trợ nhanh nhất.</p>
            </div>
            <Footer />
            <BottomTab />
        </>
    )
}

export default Rules;
