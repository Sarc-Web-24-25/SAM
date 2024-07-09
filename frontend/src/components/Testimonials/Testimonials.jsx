import React from 'react';
import './Testimonials.css';

const TestimonialsData = [
    {
        name: 'MR. ABC',
        image: 'data:image/jpeg;base64,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'
    },
    {
        name: 'Mr. def',
        image: 'data:image/jpeg;base64,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'

    },
    {
        name: 'Mr. ghi',
        image: 'data:image/jpeg;base64,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'
    },
    {
        name: 'Mr. jkl',
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAQMA8AMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAwQCB//aAAgBAQAAAACygAMZAAAAR9Xjuzt7JXvAAAMQFf5ASlx3AAAQVRAJC9ZAABTYYAW6dAABRI8ASd4AABQuEAbPo4AAKTFAD39IAABWK2AO2/AAAo0aANt47gAA+e8wAz9F2gABV64AO6+gAA4KGALLZgAAICpgJq3+gAANXzzwBdpUAAAp8IDd9FAAAFOhQdV/9AAAK7VgEhePYAAaoCs4AJCzSoACOgoXwAB0zs70AOKDhuYAAGZWflcmuoQ4AAAOm6dyjxgAAADrv/HQQAAABddFRAAAAFj21cAAAAT++sgAAACf21sAAAAT+yuAAAACw9UKAAAAJqtD15z5AAAB24bs8WkAB73ZxjPrPLjAAAAAz//EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAoCAhADEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANQKAAICgAAAAP//EADgQAAIBAwEEBwUHBAMAAAAAAAECAwAEBREVIUBUBhITMDFBUSIjMmJzFCAzNENSchBhgYJxg5H/2gAIAQEAAT8A70kDxNAg+BB4vI362MQOgaRvgFPmMg4YduRTMzHVmJPqajyFzF8HZD/qSkz96PFYmqLpCP1baoMpZXG5Zgp9H3cMzKis7EBQNST4Cp8/Cm6CEvV5eSXs3auANwAA+/Y5W4tCF+OL9hq3uIrmISRNqp4TOXgihFuPjfusdfPZTg+MbbnFKwZQynUEAg8Hnfz5/gvd4K6MsDQMd8XB5Vy+Ruv593iJuxv4fR/YPB5Ldf3X1W7uJupLG3owPB5pOpkZvm0PdoOs6j1IHB9IYt9vN/Yp3eNi7a+tk+cHg7+/uLp3R392H9lO7hmlgfrxOVb1FY2eW5s4pJfi4K8ha3upom8nPdgEkAVbxCCCKL9iAcFn4NHgnHmCp7vGxdtfWyfODweTtjdWUiAauPbXu8Bbb5bk/wAE4TNWUItjPHEA4kBfucHbJPcSF0DIiUiJGoRFCqPADhJ4lnhlibwdSKdGjdkcaMpII7jD2/YWSHzl9vhs+iJegjxeIE/ftou2uIYv3uFoAAAAaAcNnXR70dUg6RAffsZBFeWzt4CRaV0cBkYMD5g68LmciU1tYW+oe5x9+9lL6xn41qOVJo1kjYMrDUHgpZ4YF60sqoKvM9uKWoP1DRJJJPdWORnsj7O9D4pVvmbKfcWMTfPQIIBBBB8x30+WsYP1eu3olXGeuZN0IEQp5HkYs7lmPmTqe+gu7m2OsMrLVtn+Zi/ylQXdtcjWGZW7m5yNna7nl1b9ibzU+flO6CELU95dXP40zNwYJBBB0NW2avYNzMJV+erbNWc+5yYmoMGAIIIPgR9yaaK3jMsr6IKvczcXOqRe6i4m2u7i1frRSEVYXyXsWo3OPjX+uUvjeXB0Puk3JxdjdGzuUl/ww9RQIYAg6ggEGsjN2FjcP5leqP8AbjcLP21kF84iVrPvpawp6y8b0ef3lynyA10j+Cz/AN+N6O/mp/oV0i8bT/fjej35qf6NdIvG1/4fjej35if6VdIvjtv4Hjej348/06zVnc3LwGGIuAlbJyPKvWycjyr1snI8q9bJyPKvWycjyr1snI8q9bJyPKvWycjyr1snI8q9bJyPKvWycjyr1snI8q9bJyPKvWycjyr1snI8q9bJyPKvWycjyr1snI8q9bJyPKvWycjyr1snI8q9bJyPKvWycjyr1snI8q9bJyPKvWycjyr1snI8q9bJyPKvWFs7m1eczRFNVoDUgAbya6p0103a6UASCdNw8TSqXYKq6sfKnieP40I36UqlyFUak+QrqHq9fT2ddNeJ+0Jv0BGu8/yPjQnUMTq+h09nyXShcadmA77jqX0BJr7XENyh1/uoA3ldOtpX2yProfb0V9SvlJ/dqnk7SQsCdD5Hy79CocF11XzFF7Y/pGhJbDX3R0oPbb/dN4UGtwN8bE6etCSAHdHu/wDfOu1g0/C37t+g9da7a384KcgsxUaAk6Cjxo8RX//EABQRAQAAAAAAAAAAAAAAAAAAAHD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAHD/2gAIAQMBAT8Af//Z'
    }
];

const TestimonialsCard = ({ name, image}) => (
    <div className="testimonials-card">
        
        <div className="testimonials-content">
            <img src={image} alt={name} className="testimonials-image" />
            <h3>{name}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est dignissimos sunt sequi earum eius aut? Sint iste aliquam ullam consequuntur?</p>
            </div>
        </div>
);

const Testimonials = () => (
    <div className="testimonials-container">
        <h2 className="testimonials-heading">TESTIMONIALS</h2>
        <div className="testimonials">
            {TestimonialsData.map((sponsor, index) => (
                <TestimonialsCard key={index} {...sponsor} />
            ))}
        </div>
    </div>
);

export default Testimonials;
