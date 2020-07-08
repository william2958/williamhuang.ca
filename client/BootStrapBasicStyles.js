import styled from 'styled-components';

export const BootStrapBasicStyles = styled.div`
	//.container {
	//  width: 100%;
	//  padding-right: 15px;
	//  padding-left: 15px;
	//  margin-right: auto;
	//  margin-left: auto;
	//}
	//
	//@media (min-width: 576px) {
	//  .container {
	//    max-width: 540px;
	//  }
	//}
	//
	//@media (min-width: 768px) {
	//  .container {
	//    max-width: 720px;
	//  }
	//}
	//
	//@media (min-width: 992px) {
	//  .container {
	//    max-width: 960px;
	//  }
	//}
	//
	//@media (min-width: 1200px) {
	//  .container {
	//    max-width: 1140px;
	//  }
	//}
	//
	//.container-fluid, .container-sm, .container-md, .container-lg, .container-xl {
	//  width: 100%;
	//  padding-right: 15px;
	//  padding-left: 15px;
	//  margin-right: auto;
	//  margin-left: auto;
	//}
	//
	//@media (min-width: 576px) {
	//  .container, .container-sm {
	//    max-width: 540px;
	//  }
	//}
	//
	//@media (min-width: 768px) {
	//  .container, .container-sm, .container-md {
	//    max-width: 720px;
	//  }
	//}
	//
	//@media (min-width: 992px) {
	//  .container, .container-sm, .container-md, .container-lg {
	//    max-width: 960px;
	//  }
	//}
	//
	//@media (min-width: 1200px) {
	//  .container, .container-sm, .container-md, .container-lg, .container-xl {
	//    max-width: 1140px;
	//  }
	//}
	//
	//.row {
	//  display: -ms-flexbox;
	//  display: flex;
	//  -ms-flex-wrap: wrap;
	//  flex-wrap: wrap;
	//  margin-right: -15px;
	//  margin-left: -15px;
	//}
	//
	//.no-gutters {
	//  margin-right: 0;
	//  margin-left: 0;
	//}
	//
	//.no-gutters > .col,
	//.no-gutters > [class*="col-"] {
	//  padding-right: 0;
	//  padding-left: 0;
	//}
	//
	//.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,
	//.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,
	//.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,
	//.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,
	//.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,
	//.col-xl-auto {
	//  position: relative;
	//  width: 100%;
	//  padding-right: 15px;
	//  padding-left: 15px;
	//}
	//
	//.col {
	//  -ms-flex-preferred-size: 0;
	//  flex-basis: 0;
	//  -ms-flex-positive: 1;
	//  flex-grow: 1;
	//  min-width: 0;
	//  max-width: 100%;
	//}
	//
	//.row-cols-1 > * {
	//  -ms-flex: 0 0 100%;
	//  flex: 0 0 100%;
	//  max-width: 100%;
	//}
	//
	//.row-cols-2 > * {
	//  -ms-flex: 0 0 50%;
	//  flex: 0 0 50%;
	//  max-width: 50%;
	//}
	//
	//.row-cols-3 > * {
	//  -ms-flex: 0 0 33.333333%;
	//  flex: 0 0 33.333333%;
	//  max-width: 33.333333%;
	//}
	//
	//.row-cols-4 > * {
	//  -ms-flex: 0 0 25%;
	//  flex: 0 0 25%;
	//  max-width: 25%;
	//}
	//
	//.row-cols-5 > * {
	//  -ms-flex: 0 0 20%;
	//  flex: 0 0 20%;
	//  max-width: 20%;
	//}
	//
	//.row-cols-6 > * {
	//  -ms-flex: 0 0 16.666667%;
	//  flex: 0 0 16.666667%;
	//  max-width: 16.666667%;
	//}
	//
	//.col-auto {
	//  -ms-flex: 0 0 auto;
	//  flex: 0 0 auto;
	//  width: auto;
	//  max-width: 100%;
	//}
	//
	//.col-1 {
	//  -ms-flex: 0 0 8.333333%;
	//  flex: 0 0 8.333333%;
	//  max-width: 8.333333%;
	//}
	//
	//.col-2 {
	//  -ms-flex: 0 0 16.666667%;
	//  flex: 0 0 16.666667%;
	//  max-width: 16.666667%;
	//}
	//
	//.col-3 {
	//  -ms-flex: 0 0 25%;
	//  flex: 0 0 25%;
	//  max-width: 25%;
	//}
	//
	//.col-4 {
	//  -ms-flex: 0 0 33.333333%;
	//  flex: 0 0 33.333333%;
	//  max-width: 33.333333%;
	//}
	//
	//.col-5 {
	//  -ms-flex: 0 0 41.666667%;
	//  flex: 0 0 41.666667%;
	//  max-width: 41.666667%;
	//}
	//
	//.col-6 {
	//  -ms-flex: 0 0 50%;
	//  flex: 0 0 50%;
	//  max-width: 50%;
	//}
	//
	//.col-7 {
	//  -ms-flex: 0 0 58.333333%;
	//  flex: 0 0 58.333333%;
	//  max-width: 58.333333%;
	//}
	//
	//.col-8 {
	//  -ms-flex: 0 0 66.666667%;
	//  flex: 0 0 66.666667%;
	//  max-width: 66.666667%;
	//}
	//
	//.col-9 {
	//  -ms-flex: 0 0 75%;
	//  flex: 0 0 75%;
	//  max-width: 75%;
	//}
	//
	//.col-10 {
	//  -ms-flex: 0 0 83.333333%;
	//  flex: 0 0 83.333333%;
	//  max-width: 83.333333%;
	//}
	//
	//.col-11 {
	//  -ms-flex: 0 0 91.666667%;
	//  flex: 0 0 91.666667%;
	//  max-width: 91.666667%;
	//}
	//
	//.col-12 {
	//  -ms-flex: 0 0 100%;
	//  flex: 0 0 100%;
	//  max-width: 100%;
	//}
	//@media (min-width: 576px) {
	//  
	//  .col-sm-auto {
	//    -ms-flex: 0 0 auto;
	//    flex: 0 0 auto;
	//    width: auto;
	//    max-width: 100%;
	//  }
	//  .col-sm-1 {
	//    -ms-flex: 0 0 8.333333%;
	//    flex: 0 0 8.333333%;
	//    max-width: 8.333333%;
	//  }
	//  .col-sm-2 {
	//    -ms-flex: 0 0 16.666667%;
	//    flex: 0 0 16.666667%;
	//    max-width: 16.666667%;
	//  }
	//  .col-sm-3 {
	//    -ms-flex: 0 0 25%;
	//    flex: 0 0 25%;
	//    max-width: 25%;
	//  }
	//  .col-sm-4 {
	//    -ms-flex: 0 0 33.333333%;
	//    flex: 0 0 33.333333%;
	//    max-width: 33.333333%;
	//  }
	//  .col-sm-5 {
	//    -ms-flex: 0 0 41.666667%;
	//    flex: 0 0 41.666667%;
	//    max-width: 41.666667%;
	//  }
	//  .col-sm-6 {
	//    -ms-flex: 0 0 50%;
	//    flex: 0 0 50%;
	//    max-width: 50%;
	//  }
	//  .col-sm-7 {
	//    -ms-flex: 0 0 58.333333%;
	//    flex: 0 0 58.333333%;
	//    max-width: 58.333333%;
	//  }
	//  .col-sm-8 {
	//    -ms-flex: 0 0 66.666667%;
	//    flex: 0 0 66.666667%;
	//    max-width: 66.666667%;
	//  }
	//  .col-sm-9 {
	//    -ms-flex: 0 0 75%;
	//    flex: 0 0 75%;
	//    max-width: 75%;
	//  }
	//  .col-sm-10 {
	//    -ms-flex: 0 0 83.333333%;
	//    flex: 0 0 83.333333%;
	//    max-width: 83.333333%;
	//  }
	//  .col-sm-11 {
	//    -ms-flex: 0 0 91.666667%;
	//    flex: 0 0 91.666667%;
	//    max-width: 91.666667%;
	//  }
	//  .col-sm-12 {
	//    -ms-flex: 0 0 100%;
	//    flex: 0 0 100%;
	//    max-width: 100%;
	//  }
	//  
	//}
	//
	//@media (min-width: 768px) {
	//  .col-md {
	//    -ms-flex-preferred-size: 0;
	//    flex-basis: 0;
	//    -ms-flex-positive: 1;
	//    flex-grow: 1;
	//    min-width: 0;
	//    max-width: 100%;
	//  }
	//  
	//  .col-md-auto {
	//    -ms-flex: 0 0 auto;
	//    flex: 0 0 auto;
	//    width: auto;
	//    max-width: 100%;
	//  }
	//  .col-md-1 {
	//    -ms-flex: 0 0 8.333333%;
	//    flex: 0 0 8.333333%;
	//    max-width: 8.333333%;
	//  }
	//  .col-md-2 {
	//    -ms-flex: 0 0 16.666667%;
	//    flex: 0 0 16.666667%;
	//    max-width: 16.666667%;
	//  }
	//  .col-md-3 {
	//    -ms-flex: 0 0 25%;
	//    flex: 0 0 25%;
	//    max-width: 25%;
	//  }
	//  .col-md-4 {
	//    -ms-flex: 0 0 33.333333%;
	//    flex: 0 0 33.333333%;
	//    max-width: 33.333333%;
	//  }
	//  .col-md-5 {
	//    -ms-flex: 0 0 41.666667%;
	//    flex: 0 0 41.666667%;
	//    max-width: 41.666667%;
	//  }
	//  .col-md-6 {
	//    -ms-flex: 0 0 50%;
	//    flex: 0 0 50%;
	//    max-width: 50%;
	//  }
	//  .col-md-7 {
	//    -ms-flex: 0 0 58.333333%;
	//    flex: 0 0 58.333333%;
	//    max-width: 58.333333%;
	//  }
	//  .col-md-8 {
	//    -ms-flex: 0 0 66.666667%;
	//    flex: 0 0 66.666667%;
	//    max-width: 66.666667%;
	//  }
	//  .col-md-9 {
	//    -ms-flex: 0 0 75%;
	//    flex: 0 0 75%;
	//    max-width: 75%;
	//  }
	//  .col-md-10 {
	//    -ms-flex: 0 0 83.333333%;
	//    flex: 0 0 83.333333%;
	//    max-width: 83.333333%;
	//  }
	//  .col-md-11 {
	//    -ms-flex: 0 0 91.666667%;
	//    flex: 0 0 91.666667%;
	//    max-width: 91.666667%;
	//  }
	//  .col-md-12 {
	//    -ms-flex: 0 0 100%;
	//    flex: 0 0 100%;
	//    max-width: 100%;
	//  }
	//  
	//}
`;
