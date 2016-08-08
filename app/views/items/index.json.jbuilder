json.array!(@items) do |item|
  json.extract! item, :id, :title, :description, :image, :price, :currency, :time_created
  json.url item_url(item, format: :json)
end
