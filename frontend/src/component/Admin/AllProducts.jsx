import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./AllProducts.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  deleteProduct,
  getAdminProduct,
} from "../../actions/ProductActions";
import { Link } from "react-router-dom"; 
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import SideBar from "./Sidebar";
import { ToastContainer, toast } from 'react-toastify';
import { DELETE_PRODUCT_RESET } from "../../constans/ProductConstans";


const AllProducts = ({history}) => {

const dispatch = useDispatch();

const { error, products } = useSelector((state) => state.products);

const { error: deleteError, isDeleted } = useSelector(
    (state) => state.deleteProduct
  );
  const deleteProductHandler = (id) => {
    dispatch(deleteProduct(id));
  };

useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }
    if (deleteError) {
        toast.error(deleteError);
        dispatch(clearErrors());
      }
  
      if (isDeleted) {
        toast.success("Xóa thành công!!!");
        history.push("/admin/products");
        dispatch({ type: DELETE_PRODUCT_RESET });
      }
    dispatch(getAdminProduct());
  }, [dispatch, alert, error, deleteError, history, isDeleted]);


  const columns = [
    { field: "name", headerName: "Tên", minWidth: 350, flex: 0.2 },
    { field: "stock", headerName: "Số lượng", type: "number", minWidth: 190, flex: 0.1 },
    { field: "price", headerName: "Giá", type: "number", minWidth: 100, flex: 0.1 },
    {
      field: "image",
      headerName: "Ảnh",
      minWidth: 120,
      flex: 0.1,
      renderCell: (params) => (
        <img src={params.value[0].url} alt="Product" style={{ width: 50, height: 50 }} />
      ),
    },
    { field: "supplier", headerName: "Nhà cung cấp", minWidth: 350, flex: 0.2 },
    {
      field: "actions",
      flex: 0.1,
      headerName: "Tùy chọn",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/product/${params.getValue(params.id, "id")}`}>
              <VisibilityOutlinedIcon style={{ marginRight: ".8vmax" }} />
            </Link>
            <Link to={`/edit/product/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>
            <Button
              onClick={() => deleteProductHandler(params.getValue(params.id, "id"))}
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id, 
        stock: item.Stock,
        // supplier: item.supplier,
        price: item.price,
        name: item.name,
        image:item.images
      });
    });

    return (
       <Fragment>
      <MetaData title={`ALL PRODUCTS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">TẤT CẢ SẢN PHẨM</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={12}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
      <ToastContainer 
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
    </Fragment>
    )
}

export default AllProducts
