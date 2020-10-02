import React from 'react'
import '../../css/table.css'

function table() {
    return (
        <div>

        <div className="row bg-white mb-4 table_sec px-5 table-responsive mx-auto">
            <div className="mt-4 mb-3 table_title">Standard Table Design</div>

            <table className="table table-hover">
            <thead>
                <tr>
                <td>Name</td>
                <td>Email</td>
                <td>User Type</td>
                <td>Joined</td>
                <td>Status</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Mike Bhand</td>
                <td>mikebhand@email.com</td>
                <td>Admin </td>
                <td>25 Apr, 2018</td>
                <td><a href="/" className="pen_btn">PENDING</a></td>
                </tr>
                <tr>
                <td>Andrew Strauss</td>
                <td>info@yourmail.com</td>
                <td>Editor</td>
                <td>25 Apr, 2018</td>
                <td><a href="/" className="app_btn">APPROVED</a></td>
                </tr>
                <tr>
                <td>Ross Kopelman</td>
                <td>rosskopelman@email.com</td>
                <td>Subscriber</td>
                <td>25 Apr, 2018</td>
                <td><a href="/" className="app_btn">APPROVED</a></td>
                </tr>
                <tr>
                <td>Mike Hussy</td>
                <td>mikehussy@email.com</td>
                <td>Admin</td>
                <td>25 Apr, 2018</td>
                <td><a href="/" className="rej_btn">REJECT</a></td>
                </tr>
                <tr>
                <td>Kevin Pietersen</td>
                <td>kpietersen@email.com</td>
                <td>Admin </td>
                <td>25 Apr, 2018</td>
                <td><a href="/" className="pen_btn">PENDING</a></td>
                </tr>
            </tbody>
            </table>
        </div>

        </div>
    )
}

export default table
