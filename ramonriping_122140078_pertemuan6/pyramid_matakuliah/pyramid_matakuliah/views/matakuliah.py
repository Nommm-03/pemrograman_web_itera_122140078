from pyramid.view import view_config
from ..models.matakuliah import Matakuliah
import json
from pyramid.response import Response

@view_config(route_name='matakuliah_list', renderer='json')
def matakuliah_list(request):
    matakuliahs = request.dbsession.query(Matakuliah).all()
    return {'data': [mk.to_dict() for mk in matakuliahs]}

@view_config(route_name='matakuliah_detail', renderer='json')
def matakuliah_detail(request):
    mk_id = int(request.matchdict['id'])
    matakuliah = request.dbsession.query(Matakuliah).get(mk_id)
    if not matakuliah:
        return Response(json.dumps({'error': 'Matakuliah tidak ditemukan'}), status=404)
    return matakuliah.to_dict()

@view_config(route_name='matakuliah_add', renderer='json')
def matakuliah_add(request):
    try:
        data = request.json_body
        existing = request.dbsession.query(Matakuliah).filter_by(kode_mk=data['kode_mk']).first()
        if existing:
            return Response(json.dumps({'error': 'Kode matakuliah sudah ada'}), status=400)

        matakuliah = Matakuliah(
            kode_mk=data['kode_mk'],
            nama_mk=data['nama_mk'],
            sks=int(data['sks']),
            semester=int(data['semester'])
        )
        request.dbsession.add(matakuliah)
        return Response(json.dumps({'message': 'Matakuliah berhasil ditambahkan', 'data': matakuliah.to_dict()}), status=201)
    except Exception as e:
        return Response(json.dumps({'error': 'Data tidak valid', 'details': str(e)}), status=400)

@view_config(route_name='matakuliah_update', renderer='json')
def matakuliah_update(request):
    mk_id = int(request.matchdict['id'])
    matakuliah = request.dbsession.query(Matakuliah).get(mk_id)
    if not matakuliah:
        return Response(json.dumps({'error': 'Matakuliah tidak ditemukan'}), status=404)

    data = request.json_body
    try:
        if 'kode_mk' in data:
            matakuliah.kode_mk = data['kode_mk']
        if 'nama_mk' in data:
            matakuliah.nama_mk = data['nama_mk']
        if 'sks' in data:
            matakuliah.sks = int(data['sks'])
        if 'semester' in data:
            matakuliah.semester = int(data['semester'])

        return Response(json.dumps({'message': 'Matakuliah berhasil diubah', 'data': matakuliah.to_dict()}))
    except Exception as e:
        return Response(json.dumps({'error': 'Gagal memperbarui matakuliah', 'details': str(e)}), status=400)

@view_config(route_name='matakuliah_delete', renderer='json')
def matakuliah_delete(request):
    mk_id = int(request.matchdict['id'])
    matakuliah = request.dbsession.query(Matakuliah).get(mk_id)
    if not matakuliah:
        return Response(json.dumps({'error': 'Matakuliah tidak ditemukan'}), status=404)

    request.dbsession.delete(matakuliah)
    return Response(json.dumps({'message': 'Matakuliah berhasil dihapus'}))