import React from 'react';
import '../App.css';

const Content = () => {
    return (
        <div>
            <table border={"1px"} cellPadding={'5px'} cellSpacing={"0px"}>
                <thead>
                    <tr>
                        <th>Senin</th>
                        <th>Selasa</th>
                        <th>Rabu</th>
                        <th>Kamis</th>
                        <th>Jumat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pemrograman</td>
                        <td>Pemrograman</td>
                        <td>Pemrograman</td>
                        <td>PKWU</td>
                        <td>Bahasa German</td>
                    </tr>
                    <tr>
                        <td>Pemrograman</td>
                        <td>Pemrograman</td>
                        <td>Pemrograman</td>
                        <td>Bahasa nurdin</td>
                        <td>Bahasa Jawa</td>
                    </tr>
                    <tr>
                        <td>Pemrograman</td>
                        <td>Pemrograman</td>
                        <td>Matematika</td>
                        <td>Bahasa Indonesia</td>
                        <td>PPKN</td>
                    </tr>
                    <tr>
                        <td>Pemrograman</td>
                        <td>Pemrograman</td>
                        <td>Olahraga</td>
                        <td>Pemrograman</td>
                        <td>PKWU</td>
                    </tr>
                    <tr>
                        <td>Matematika</td>
                        <td>Pemrograman</td>
                        <td>Agama</td>
                        <td>Pemograman</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Content;
