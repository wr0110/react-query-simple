import axios from "axios";

const getVideos = (page, pqd) => axios.post('https://apilv.letsplayback.com/api/v1/videos.json', {
    page,
    pqd,
  });

const getViewer = (videoId, email, name) => axios.post(`https://apilv.letsplayback.com/api/v1/videos/${videoId}/viewers.json`, {
    email,
    name,
  });

const addCart = (quantity, variant_id, viewer_id) => axios.post(`https://apilv.letsplayback.com/api/v1/line_items.json`, {
    quantity,
    variant_id,
    viewer_id,
  });

export { getVideos, getViewer, addCart };