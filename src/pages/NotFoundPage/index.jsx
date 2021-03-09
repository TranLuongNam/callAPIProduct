import React, { PureComponent } from "react";

class NotFoundPage extends PureComponent {
  render() {
    return (
      <div classname="container">
        <h1>NotFoundPage</h1>
        <div className="alert alert-primary" role="alert">
          <strong>Không tìm thấy Page</strong>
        </div>
      </div>
    );
  }
}
export default NotFoundPage;
