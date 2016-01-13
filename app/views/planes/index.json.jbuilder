json.array!(@planes) do |plane|
  json.extract! plane, :id, :rows, :columns, :name
  json.url plane_url(plane, format: :json)
end
