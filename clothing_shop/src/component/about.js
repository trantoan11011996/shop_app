import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/about.css"

export default function About() {
    return (
        <div className="about-section">
            <Container className="about-container">
                <h1>TUM MACHINES</h1>
                <Row className="about-intro-header">
                    <Col md={12} className="intro-1">
                        <p >
                            Thành lập vào năm 2012, Tum Machines tự tin là một trong những thương hiệu streetwear tiên phong tại thị trường Việt Nam.
                            Là sự kết hợp giữa chất lượng và chất xám, những sản phẩm của Tums luôn nhận được tình cảm của khách hàng trong nhiều năm hoạt động.
                            Tums luôn mong muốn khách hàng sẽ nhận được những sản phẩm tốt nhất, giúp người mặc nói lên cái tôi riêng của mình.
                        </p>
                    </Col>
                    <Col md={12} className="intro-2">
                        <p>
                            Trung thành với tôn chỉ của thương hiệu, Tum Machines đem đến những thiết kế thanh lịch,
                            đa dụng nhưng vẫn dung hòa với xu hướng trẻ trung và hiện đại của thời trang đường phố. Cùng sự đổi mới không ngừng nghỉ, Tum
                            Machines luôn biến hóa mình để có thể đến gần hơn với tủ đồ của những người yêu thích cái đẹp và tôn trọng
                            cái tôi thời trang của mình.
                        </p>
                    </Col>
                </Row>
                <Row className="about-img">
                    <Col md={2}>
                    </Col>
                    <Col md={8} className="img">
                        <img className="w-100" src="https://tummachines.com/wp-content/uploads/2017/01/2-copy.jpg"></img>
                        <b>VĂN HÓA</b>
                    </Col>
                    <Col md={2}>
                    </Col>
                </Row>
                <Row className="about-intro-header">
                    <Col md={12} className="intro-1">
                        <p>
                            Có thể nói, ngoài sản phẩm, sự phát triển kéo dài gần thập kỷ của thương hiệu phải nhờ đến chất lượng về đội ngũ làm việc tại Tum Machines. Nhiệt huyết và trách nhiệm được dùng để miêu
                            tả những thành viên ở đây, mọi người được đối xử công bằng, tự do sáng tạo trong môi trường làm việc thời trang thân thiện và lành mạnh.
                        </p>
                    </Col>
                    <Col md={12} className="intro-2">
                        <p>
                            Với mong muốn phát triển cùng nhau, Tum Machines luôn sẵn sàng chào đón các bạn trẻ có tài năng, cho dù bạn là một tay ngang hay người đã có kinh nghiệm.
                        </p>
                    </Col>
                </Row>
                <Row className="about-img">
                    <Col md={2}>
                    </Col>
                    <Col md={8} className="img">
                        <img className="w-100" src="https://tummachines.com/wp-content/uploads/2017/01/1-4.jpg"></img>
                        <b>GIÁ TRỊ</b>
                    </Col>
                    <Col md={2}>
                    </Col>
                </Row>
                <Row className="about-footer">
                    <p><mark>SÁNG TẠO</mark>: Đây là yếu tố tiên quyết đối với những người làm trong lĩnh vực thời trang -
                        liên tục thay đổi và cập nhật từng giờ. Do đó, Tum Machines
                        luôn tạo điều kiện tốt nhất về tinh thần và vật chất nhằm khuyến khích sự sáng tạo
                        “vô hạn” của từng cá nhân trong team.</p>
                </Row>
                <Row className="about-footer">
                    <p><mark>CÔNG BẰNG</mark>:
                        Với tiêu chí “Làm hết mình -
                        chơi hết bình”, những cố gắng và cống hiến của bạn luôn tạo nên giá trị hoàn toàn xứng đáng.</p>
                </Row>
                <Row className="about-footer">
                    <p><mark>TRÁCH NHIỆM</mark>:
                        Nhằm tạo dựng môi trường làm việc chuyên nghiệp,
                        các thành viên tại Tum Machines luôn đề cao tính tự giác, tinh thần trách nhiệm để hoàn thành tốt công việc của mình.</p>
                </Row>
                <Row className="about-footer">
                    <p><mark>TÔN TRỌNG</mark>: 
                        Dù ở bất kì vị trí nào, các thành viên của Tum Machines
                        làm việc với thái độ tôn trọng lẫn nhau. Mọi ý kiến và quan điểm của bạn luôn được lắng nghe!</p>
                </Row>
            </Container>
        </div>
    )
}