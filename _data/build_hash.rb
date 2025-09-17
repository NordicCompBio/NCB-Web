# generate_build.rb
require 'yaml'

commit = `git rev-parse --short HEAD`.strip
data = { 'commit' => commit }

File.write('_data/build.yml', data.to_yaml)
puts "Generated _data/build.yml with commit #{commit}"