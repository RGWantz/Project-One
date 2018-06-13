import { connect } from 'react-redux';
import { getReimsByUser} from '../actions/admin/admin.actions';
import { IState } from '../reducers';
import { UserViewComponent } from './userView.component';


const mapStateToProps = (state: IState) => ({
  admin: state.admin,
  user: state.user
}); 
    
export const mapDispatchToProps = {
    getReimsByUser
};

export const UserViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserViewComponent);
