import React from 'react'
import Navbar from './component/navbar'
import Sidebar from './component/sidebar'
import Table from './component/table'
import $ from "jquery";

class Home extends React.Component  {
    componentDidMount() {
        $("#menu-toggle").on('click' ,function() {
      $("#sidebar-wrapper").toggle();
          });

          $(".card_two").on('click' ,function() {
            $(".table_sec").toggle();
                });

        $(".table_sec").on('click' ,function() {
            $(".table_sec").toggle();
                });

        $(".tbtn").on('click' ,function() {
            $(".sb-list").toggle();
            $(".dashboard").toggle();
                });
    }
     
    render() {
    return (

        <div>

        <div className="d-flex" id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper">
        <Navbar />

        <div className="container-fluid content mt-5">
        <div className="mx-lg-5">
        <div className="my-4"> <a href="/" className="content_btn mr-2"></a> <span className="cont_dash">Dashboard</span></div>
        <div className="row">
            <div className="col-lg-4 px-2 mb-4"><span id="circle"></span>
            <div className="pl-4 card_one pt-4">
            <div className="card_ic"></div>
            <div className="card_total mt-2">Stock Total</div><span id="circle_bot"></span>
            <div className="card_price mt-2">$150000</div>
            <div className="card_inc mt-4 pb-4">Increased by 60%</div>
            </div>
            </div>

            <div className="col-lg-4 px-2 mb-4"><span id="circle"></span>
            <div className="pl-4 card_two pt-4">
            <div className="card_ic"></div>
            <div className="card_total mt-2">Stock Total</div><span id="circle_bot"></span>
            <div className="card_price mt-2">$150000</div>
            <div className="card_inc mt-4 pb-4">Increased by 60%</div>
            </div>
            </div>

            <div className="col-lg-4 px-2 mb-4"><span id="circle"></span>
            <div className="pl-4 card_three pt-4">
            <div className="card_ic"></div>
            <div className="card_total mt-2">Stock Total</div><span id="circle_bot"></span>
            <div className="card_price mt-2">$150000</div>
            <div className="card_inc mt-4 pb-4">Increased by 60%</div>
            </div>
            </div>

        </div>

        <Table />

        </div>
        </div>
        </div>

        </div>

        </div>

    )
}}

export default Home