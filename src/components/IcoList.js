import React from 'react'
import { Row, Col, Panel } from 'react-bootstrap'

const IcoList = ({ title, data }) => (
  <div>
    <h1>{title}</h1>
    <Row>
      {
        data ?
          data.map((ico, i) =>
            <Col key={i} xs={12} sm={6} md={4} lg={3}>
              <Panel header={<h1 className="text-center">{ico.ico_name}</h1>}>
                {ico.short_description}
              </Panel>
            </Col>
          ) :
          <h3>Not Found</h3>
      }
    </Row>
  </div>
)

export default IcoList
