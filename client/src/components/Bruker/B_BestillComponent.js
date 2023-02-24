import React from "react"
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Telleboks from "../Telleboks";

function B_Bestill() {
  return (
    <React.Fragment>
      <h1>Bestillinger</h1><hr/>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://i.stack.imgur.com/SBv4T.gif" />
          <Card.Body>
            <Card.Title className="text-center">Velkommen!</Card.Title>
            <Card.Text>
              Da var det mandag igjen!
            </Card.Text>
            <Telleboks />
            {/*<Button variant="primary" className="d-flex mx-auto">Go somewhere</Button>*/}
          </Card.Body>
        </Card>

      </div>

      <div>
        <Card>
          <Card.Header>Informasjon til sluttbruker</Card.Header>
          <Card.Body>
            <Card.Title>Slik fungerer denne siden</Card.Title>
            <Card.Text style={{ wordWrap: "break-word" }}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus sapien dolor, et tincidunt elit tempus nec. Praesent maximus, turpis in gravida dapibus, massa felis convallis lectus, quis mollis enim elit non nibh. Duis in lobortis nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam rutrum, tortor quis fermentum accumsan, ex mauris interdum nunc, eu efficitur velit diam condimentum mauris. Maecenas eleifend, ipsum et laoreet pretium, magna dolor mattis leo, vitae pretium magna purus vel dolor. Phasellus malesuada neque eu nisi maximus eleifend. Sed massa justo, congue in ullamcorper sit amet, cursus quis arcu.</p>
              <p>Suspendisse condimentum, neque vitae sodales vehicula, magna augue accumsan lacus, vel imperdiet lacus orci et odio. Nullam dignissim, tellus venenatis iaculis condimentum, tortor lectus viverra neque, quis luctus lectus enim at dui. Integer ultricies nulla eu nibh facilisis, lobortis ultrices massa consequat. Nam vitae ligula ac turpis sodales iaculis sed sit amet leo. Praesent purus sapien, porta at erat et, porta lacinia dolor. Cras maximus pharetra sem id ultricies. Cras sit amet congue lectus. In a rutrum lectus, nec venenatis nulla.</p>
              <p>Nunc molestie hendrerit rutrum. Sed interdum nulla in ante scelerisque finibus. Nunc dui nisi, sagittis sed velit sit amet, consectetur fermentum quam. Donec et augue at ex feugiat accumsan. Morbi auctor magna non rutrum malesuada. Integer non consequat urna. Sed varius ligula in elit vulputate, mattis vestibulum massa lacinia. Proin vel odio a felis porttitor congue in et lacus. Integer eu tristique augue, elementum cursus libero. Nunc fermentum, mauris vel ullamcorper lobortis, neque dolor ultricies lorem, eget semper turpis nisl nec massa. Sed condimentum neque mollis congue tincidunt. Nullam tincidunt, ex et tristique consequat, enim quam varius est, sit amet blandit felis leo eget enim. Quisque sed neque ut dui cursus vestibulum sed ac lorem. Ut porttitor, libero sit amet suscipit bibendum, diam odio mattis arcu, eget laoreet eros justo in risus. Curabitur volutpat tellus massa. Pellentesque vitae lorem vel arcu fermentum commodo.</p>
              <p>Nam laoreet mi id varius tempor. Nunc elementum felis quis dui elementum gravida. Morbi sit amet hendrerit ante, quis viverra dolor. Donec lacinia molestie vestibulum. Nam sed ex eu purus molestie efficitur. Fusce nec porta nulla, vitae volutpat libero. Donec iaculis orci accumsan velit sodales rhoncus. Etiam ultricies quis nibh quis pretium. Curabitur scelerisque, libero eu ultricies gravida, dolor nisl vestibulum lacus, vitae sollicitudin nisl neque id ipsum.</p>
              <p>Duis eget nisl quis nunc volutpat porta dignissim in leo. Pellentesque vitae aliquam velit. Fusce imperdiet ut sem nec viverra. Nulla purus est, condimentum at risus sit amet, pretium fermentum risus. Duis nec justo rutrum, tempor lacus ut, rhoncus justo. Nunc facilisis nibh non sapien tincidunt venenatis. Vivamus vulputate mi non nulla auctor consequat. Maecenas eleifend nec purus semper gravida. Integer a augue ac ipsum accumsan feugiat. Vivamus vel ornare enim. Maecenas eu dignissim metus. Mauris pellentesque, velit quis ornare pulvinar, nisl erat feugiat lorem, sit amet finibus lectus est ut ex. Vestibulum sed nulla velit. Pellentesque aliquet lacus libero, quis euismod dui elementum at. Sed et risus pharetra, fringilla magna nec, cursus elit.</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

    </React.Fragment>
  )
}

export default B_Bestill;
