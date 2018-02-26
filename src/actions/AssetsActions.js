import { saveAssetsToRealm, getAllAssetsFromRealm } from "../schemas/RealmDAO";

export const FETCHING_ASSETS = 'FETCHING_ASSETS';
export const FETCHING_ASSETS_SUCCESS = 'FETCHING_ASSETS_SUCCESS';
export const FETCHING_ASSETS_FAILURE = 'FETCHING_ASSETS_FAILURE';
export const CHECK_AUDIT_ASSET = 'CHECK_AUDIT_ASSET';


const MAXIMO_HOST = 'http://192.168.56.1:9081';
const USERID = 'wilson';
const PASSWORD = 'wilson';
const OSLC_SELECT = 'assetnum,description,status,location,audited,lastauditdate';

export function fetchAssetsFromMaximo() {
    return (dispatch) => {
        dispatch(getAssets());

        const queryUri = MAXIMO_HOST
            + '/maximo/oslc/os/mxasset?lean=1&_lid='
            + USERID + '&_lpwd=' + PASSWORD
            + '&oslc.select=' + OSLC_SELECT
            + '&oslc.pageSize=20'
        console.log(queryUri);            
        fetch(queryUri)
            .then( res => res.json())
            .then( res => dispatch(getAssetsSuccess(res.member)) )
            .catch( err => dispatch(getAssetsFailure(err)));
    }
}

function getAssets() {
    return {
        type: FETCHING_ASSETS
    }
}

function getAssetsSuccess(assets) {
    return {
        type: FETCHING_ASSETS_SUCCESS,
        assets: assets  
    }
}

function getAssetsFailure() {
    return {
        type: FETCHING_ASSETS_FAILURE
    }
}

export function checkAuditAsset(assetnum) {
    console.log('Checked Audit Asset: ' + assetnum);
    return (dispatch) => {
        dispatch({
            type: CHECK_AUDIT_ASSET,
            assetnum: assetnum
        });
    }
}
