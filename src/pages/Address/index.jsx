import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { Address as AddressComponet } from './Address';
import { setStreet } from './redux/actions.js';
import { setAddressCity } from './redux/thunks.js';

const mapStateToProps = (state) => ({
  address: state.address,
});

const mapDispatchToProps = (dispatch) => ({
  setStreet: (arg) => dispatch(setStreet(arg)),
  setAddressCity: (city) => dispatch(setAddressCity(city)),
});

const Address = connect(
  mapStateToProps,
  mapDispatchToProps,
)(injectIntl(AddressComponet));

export { Address };
