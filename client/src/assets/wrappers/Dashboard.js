import styled from 'styled-components';

const Wrapper = styled.section`
  .dashboard {
    position: absolute;
    display: grid;
    
    grid-template-columns: 1fr;
  }
  .dashboard-page {
     /* Add this line */
    top: 100px; /* Add this line - adjust the value as needed */
    width: 750px !important;
    margin: 0 auto;

    /* margin-left: 200px; */
    padding-left:4rem ;
    padding-top:4rem ;
    z-index: 10; /* Ensure it stays on top of other content */
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`
export default Wrapper;