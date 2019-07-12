<template>
    <div>
       <div class="mb-5">
           <h4 class="heading-2 pb-4">Vue Bootstrap Tables</h4>
           <div class="card card-box mb-5 p-3">
               <b-form-group label="Table Options">
                   <b-form-checkbox v-model="striped" inline>Striped</b-form-checkbox>
                   <b-form-checkbox v-model="bordered" inline>Bordered</b-form-checkbox>
                   <b-form-checkbox v-model="borderless" inline>Borderless</b-form-checkbox>
                   <b-form-checkbox v-model="outlined" inline>Outlined</b-form-checkbox>
                   <b-form-checkbox v-model="small" inline>Small</b-form-checkbox>
                   <b-form-checkbox v-model="hover" inline>Hover</b-form-checkbox>
                   <b-form-checkbox v-model="fixed" inline>Fixed</b-form-checkbox>
                   <b-form-checkbox v-model="footClone" inline>Foot Clone</b-form-checkbox>
               </b-form-group>
           </div>
           <b-table
                   :striped="striped"
                   :bordered="bordered"
                   :borderless="borderless"
                   :outlined="outlined"
                   :small="small"
                   :hover="hover"
                   :fixed="fixed"
                   :foot-clone="footClone"
                   :items="items"
                   :fields="fields"
           ></b-table>
       </div>
        <h4 class="heading-2 pb-4">Dark</h4>
        <table class="table table-hover table-striped table-bordered table-dark mb-5">
            <thead class="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
            </tr>
            </tbody>
        </table>

        <h4 class="heading-2 pb-4">Alternate</h4>
        <table class="table table-bordered table-hover table-hover mb-5">
            <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th class="no-sort text-center">Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Tiger Nixon</td>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>2011/04/25</td>
                <td class="text-center">
                    <a href="javascript:void(0)" class="btn btn-first pl-2 pr-2 btn-sm ml-1 mr-1" title="View details">
                        <font-awesome-icon icon="binoculars"/>
                    </a>
                    <a href="javascript:void(0)" class="btn btn-outline-danger pl-2 pr-2 btn-sm ml-1 mr-1" title="Remove">
                        <font-awesome-icon icon="trash-alt"/>
                    </a>
                </td>
            </tr>
            <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td class="text-center">
                    <a href="javascript:void(0)" class="btn btn-first pl-2 pr-2 btn-sm ml-1 mr-1" title="View details">
                        <font-awesome-icon icon="binoculars"/>
                    </a>
                    <a href="javascript:void(0)" class="btn btn-outline-danger pl-2 pr-2 btn-sm ml-1 mr-1" title="Remove">
                        <font-awesome-icon icon="trash-alt"/>
                    </a>
                </td>
            </tr>
            <tr>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
                <td>2009/01/12</td>
                <td class="text-center">
                    <a href="javascript:void(0)" class="btn btn-first pl-2 pr-2 btn-sm ml-1 mr-1" title="View details">
                        <font-awesome-icon icon="binoculars"/>
                    </a>
                    <a href="javascript:void(0)" class="btn btn-outline-danger pl-2 pr-2 btn-sm ml-1 mr-1" title="Remove">
                        <font-awesome-icon icon="trash-alt"/>
                    </a>
                </td>
            </tr>
            <tr>
                <td>Colleen Hurst</td>
                <td>Javascript Developer</td>
                <td>San Francisco</td>
                <td>39</td>
                <td>2009/09/15</td>
                <td class="text-center">
                    <a href="javascript:void(0)" class="btn btn-first pl-2 pr-2 btn-sm ml-1 mr-1" title="View details">
                        <font-awesome-icon icon="binoculars"/>
                    </a>
                    <a href="javascript:void(0)" class="btn btn-outline-danger pl-2 pr-2 btn-sm ml-1 mr-1" title="Remove">
                        <font-awesome-icon icon="trash-alt"/>
                    </a>
                </td>
            </tr>
            <tr>
                <td>Sonya Frost</td>
                <td>Software Engineer</td>
                <td>Edinburgh</td>
                <td>23</td>
                <td>2008/12/13</td>
                <td class="text-center">
                    <a href="javascript:void(0)" class="btn btn-first pl-2 pr-2 btn-sm ml-1 mr-1" title="View details">
                        <font-awesome-icon icon="binoculars"/>
                    </a>
                    <a href="javascript:void(0)" class="btn btn-outline-danger pl-2 pr-2 btn-sm ml-1 mr-1" title="Remove">
                        <font-awesome-icon icon="trash-alt"/>
                    </a>
                </td>
            </tr>
            <tr>
                <td>Jena Gaines</td>
                <td>Office Manager</td>
                <td>London</td>
                <td>30</td>
                <td>2008/12/19</td>
                <td class="text-center">
                    <a href="javascript:void(0)" class="btn btn-first pl-2 pr-2 btn-sm ml-1 mr-1" title="View details">
                        <font-awesome-icon icon="binoculars"/>
                    </a>
                    <a href="javascript:void(0)" class="btn btn-outline-danger pl-2 pr-2 btn-sm ml-1 mr-1" title="Remove">
                        <font-awesome-icon icon="trash-alt"/>
                    </a>
                </td>
            </tr>
            <tr>
                <td>Quinn Flynn</td>
                <td>Support Lead</td>
                <td>Edinburgh</td>
                <td>22</td>
                <td>2013/03/03</td>
                <td class="text-center">
                    <a href="javascript:void(0)" class="btn btn-first pl-2 pr-2 btn-sm ml-1 mr-1" title="View details">
                        <font-awesome-icon icon="binoculars"/>
                    </a>
                    <a href="javascript:void(0)" class="btn btn-outline-danger pl-2 pr-2 btn-sm ml-1 mr-1" title="Remove">
                        <font-awesome-icon icon="trash-alt"/>
                    </a>
                </td>
            </tr>
            <tr>
                <td>Shad Decker</td>
                <td>Regional Director</td>
                <td>Edinburgh</td>
                <td>51</td>
                <td>2008/11/13</td>
                <td class="text-center">
                    <a href="javascript:void(0)" class="btn btn-first pl-2 pr-2 btn-sm ml-1 mr-1" title="View details">
                        <font-awesome-icon icon="binoculars"/>
                    </a>
                    <a href="javascript:void(0)" class="btn btn-outline-danger pl-2 pr-2 btn-sm ml-1 mr-1" title="Remove">
                        <font-awesome-icon icon="trash-alt"/>
                    </a>
                </td>
            </tr>
            </tbody>
            <tfoot class="thead-light">
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th class="no-sort text-center">Actions</th>
            </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faArrowRight,
        faArrowUp,
        faBinoculars,
        faTrashAlt
    } from '@fortawesome/free-solid-svg-icons'

    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faArrowRight,
        faArrowUp,
        faBinoculars,
        faTrashAlt
    );


    export default {
        components: {
            'font-awesome-icon': FontAwesomeIcon,
        },
        data() {
            return {
                fields: ['first_name', 'last_name', 'age'],
                items: [
                    { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                    { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                    { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
                ],
                striped: false,
                bordered: true,
                borderless: false,
                outlined: false,
                small: false,
                hover: false,
                fixed: false,
                footClone: false
            }
        }
    }
</script>