import Slider from "react-slick";
import styled from "styled-components";

export const WrapperSlideStyle = styled(Slider)`
  .slick-arrow {
    z-index: 10;
    top: 50%;
    transform: translateY(-50%);
    width: auto;
    height: auto;
    background: transparent !important; /* bỏ nền */
  }

  .slick-prev {
    left: 15px;
  }

  .slick-next {
    right: 15px;
  }

  .slick-arrow::before {
    font-size: 28px !important;
    color: #fff !important; /* chỉ icon màu trắng */
    opacity: 0.9 !important;
  }

  .slick-arrow:hover::before {
    color: #4facfe !important; /* hover đổi sang xanh hiện đại */
    transform: scale(1.2);
    transition: all 0.3s ease;
  }

  .slick-dots {
    bottom: 15px !important;
    display: flex !important;
    justify-content: center;
    gap: 10px;
  }

  .slick-dots li {
    width: 12px;
    height: 12px;
    margin: 0;
  }

  .slick-dots li button {
    width: 100%;
    height: 100%;
    padding: 0;
  }

  .slick-dots li button::before {
    content: "";
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.4);
    opacity: 1 !important;
    display: block;
  }

  .slick-dots li.slick-active button::before {
    background: #fff;
    transform: scale(1.3);
    transition: all 0.3s ease;
  }

  .slick-slide img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 12px;
  }

  .slick-list {
    border-radius: 12px;
    overflow: hidden;
  }
`;
