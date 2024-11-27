import './Product.css'
import '../../font.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'

import  { useState } from 'react'
import { Pagination, Card, Container, Row, Col } from 'react-bootstrap'

function Product() {
    const product = [
        { id: 1, name: 'phone', price: 10_000_000, desc: 'این گوشی بسیار مناسب و ارزان برای شما پیشنهاد شده است ' ,image:'/Image/phone.webp' },
        { id: 2, name: 'laptop', price: 25_000_000, desc: 'این لپ تاپ بسیار مناسب و ارزان برای شما پیشنهاد شده است '  ,image:'/Image/laptop.jfif' },
        { id: 3, name: 'book', price: 250_000, desc: 'این کتاب بسیار مناسب و ارزان برای شما پیشنهاد شده است '  ,image:'/Image/book.jfif' },
        { id: 4, name: 'mouse', price: 400_000, desc: 'این موس بسیار مناسب و ارزان برای شما پیشنهاد شده است '  ,image:'/Image/mouse.jfif' },
        { id: 5, name: 'car', price: 140_000_000, desc: 'این ماشین بسیار مناسب و ارزان برای شما پیشنهاد شده است '  ,image:'/Image/car.jfif' },
        { id: 6, name: 'shoes', price: 800_000, desc: 'این کفش بسیار مناسب و ارزان برای شما پیشنهاد شده است '  ,image:'/Image/shoes.jfif' },
        { id: 7, name: 'memory', price: 700_000, desc: 'این فلش بسیار مناسب و ارزان برای شما پیشنهاد شده است '  ,image:'/Image/memory.jfif' },
        { id: 8, name: 'airpad', price: 2_000_000, desc: 'این ایرپاد بسیار مناسب و ارزان برای شما پیشنهاد شده است ' ,image:'/Image/airpad.jfif' },
        { id: 9, name: 'light', price: 157_000, desc: 'این لامپ بسیار مناسب و ارزان برای شما پیشنهاد شده است '  ,image:'/Image/light.jfif'},
        { id: 10, name: 'course', price: 4_500_000, desc: 'این دوره بسیار مناسب و ارزان برای شما پیشنهاد شده است ' ,image:'/Image/course.png' },
    ]
    const itemPerPage = 3
    const [currentPage, setCurrentPage] = useState(1)
    const indexOfLastItem = currentPage * itemPerPage
    const indexOfFirstItem = indexOfLastItem - itemPerPage
    const currentProduct = product.slice(indexOfFirstItem, indexOfLastItem)

    const handlePageChange = (PageNumber:number) => {
        setCurrentPage(PageNumber)
    }

    const totalPages = Math.ceil(product.length / itemPerPage)
    const paginationItems = []
    for (let i = 1; i <= totalPages; i++) {
        paginationItems.push(
            <Pagination.Item key={i} active={i === currentPage} onClick={() => {
                handlePageChange(i)
            }}>{i}</Pagination.Item>
        )
    }

    return (
        <>
           
            <Container className='product'>
               
            <Link to='/Home' className='product_backhome link'>Home</Link>
                <h1 className='my-4'>product</h1>
                <Row>
                    {currentProduct.map((product) => (
                        <Col key={product.id} sm={12} md={6} lg={4} className='mb-4'>
                            <Card>
                               <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>{product.desc}</Card.Text>
                                <Card.Img variant='top' src={`${product.image}`} className='iamge_prod'  />
                                </Card.Body> 
                            </Card>
                        </Col>
                    ))}
                </Row>
                  <Pagination className='justify-content-center'>{paginationItems}</Pagination>
            </Container>
        </>
    )
}
export { Product }